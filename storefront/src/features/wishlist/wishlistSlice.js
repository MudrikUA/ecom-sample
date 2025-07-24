import { createSlice } from '@reduxjs/toolkit';


// Функція для завантаження стану авторизації
const loadWishlistFromStorage = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : { items: [] };
};

const initialState = loadWishlistFromStorage();

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item === newItem);
            if (!existingItem) {
                state.items.push(newItem);
            }
            localStorage.setItem('wishlist', JSON.stringify(state));
        },
        removeItem(state, action) {
            const rmItem = action.payload;
            state.items = state.items.filter(item => item !== rmItem);
            localStorage.setItem('wishlist', JSON.stringify(state));
        },
        clearWishlist(state) {
            state.items = [];
            localStorage.removeItem('wishlist');
        },
        toggleItem(state, action) {
            const item = action.payload;
            const existingItem = state.items.find(i => i === item);
            if (existingItem) {
                state.items = state.items.filter(i => i !== item);
            } else {
                state.items.push(item);
            }
            localStorage.setItem('wishlist', JSON.stringify(state));
        }
    },
});

export const selectIsProductInWishlist = (state, productId) => {
    return state.wishlist.items?.some((p) => p === productId);
  };

export const { addItem, removeItem, clearWishlist, toggleItem } = wishlistSlice.actions;

export const selectWishlistItems = state => state.wishlist.items;

export const selectWishlist = state => state.wishlist;

export default wishlistSlice.reducer;
