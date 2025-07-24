import { createSlice } from '@reduxjs/toolkit';

// Функція для завантаження стану авторизації
const loadAuthFromStorage = () => {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : { token: null, user: null };
};

// Початковий стан
const initialState = loadAuthFromStorage();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;

            // Збереження у localStorage
            localStorage.setItem('auth', JSON.stringify(state));
        },
        logout: (state) => {
            state.token = null;
            state.user = null;

            // Очищення localStorage
            localStorage.removeItem('auth');
        },
        updateUser: (state, action) => {

            state.user.email = action.payload.email;
            state.user.phone = action.payload.phone;
            state.user.first_name = action.payload.first_name;
            state.user.last_name = action.payload.last_name;
            // Оновлення у localStorage
            localStorage.setItem('auth', JSON.stringify(state));
        },
    },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;
export const selectAuth = state => state.auth;
export default authSlice.reducer;
