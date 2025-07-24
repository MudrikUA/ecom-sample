import { createSlice } from '@reduxjs/toolkit';

// Функція для отримання стану з localStorage
const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        isMiniCartVisible: false,
        currency: 'hrn',
    };
};

// Початковий стан
const initialState = loadCartFromStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            let newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.isMiniCartVisible = true;
            if (!existingItem) {
                newItem = { ...newItem, quantity: 1, totalPrice: newItem.price };
                state.items.push(newItem);
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalAmount += newItem.price;

            // Збереження в localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        /**
            let item = action.payload.item;
            let quantity = action.payload.quantity;
            const existingItem = state.items.find(i => i.id === item.id);
            state.totalQuantity += quantity;
         * @param {number} action.payload.itemQuantity - The quantity of the item to be added.
         */
        addFewItems(state, action) {
            let newItem = action.payload.item;
            let itemQuantity = action.payload.itemQuantity;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity += itemQuantity;
            state.isMiniCartVisible = true;
            if (!existingItem) {
                newItem = { ...newItem, quantity: itemQuantity, totalPrice: newItem.price * itemQuantity };
                state.items.push(newItem);
            } else {
                existingItem.quantity += itemQuantity;
                existingItem.totalPrice += newItem.price * itemQuantity;
            }
            state.totalAmount += newItem.price * itemQuantity;

            // Збереження в localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeItem(state, action) {
            const rmItem = action.payload;
            const existingItem = state.items.find(item => item.id === rmItem.id);
            state.totalQuantity--;
            state.isMiniCartVisible = true;
            if (!existingItem) return;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== rmItem.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalAmount -= existingItem.price;

            // Збереження в localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeItemLine(state, action) {
            const rmItem = action.payload;
            const existingItem = state.items.find(item => item.id === rmItem.id);
            if (!existingItem) return;
            state.totalQuantity -= existingItem.quantity;
            state.totalAmount -= existingItem.totalPrice;
            state.items = state.items.filter(item => item.id !== rmItem.id);

            // Збереження в localStorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;

            // Очищення localStorage
            localStorage.removeItem('cart');
        },
        hideMiniCart(state) {
            state.isMiniCartVisible = false;
            localStorage.setItem('cart', JSON.stringify(state));
        },
        changeCurrency(state, action) {
            state.currency = action.payload;

            // Збереження зміни валюти
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { addItem,
    removeItem,
    removeItemLine,
    clearCart,
    hideMiniCart,
    changeCurrency,
    addFewItems } = cartSlice.actions;
export const selectCart = state => state.cart;
export default cartSlice.reducer;
