import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'
import wishlistReducer from '../features/wishlist/wishlistSlice'
import { checkTokenMiddleware } from './checkTokenMiddleware'


export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    wishlist: wishlistReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkTokenMiddleware),
})