import { logout } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

export const checkTokenMiddleware = (store) => (next) => (action) => {
    console.log("Middleware triggered:", action.type);

    const token = store.getState().auth.token;

    // Якщо токену немає (вже розлогінені), просто продовжуємо
    if (!token) return next(action);

    if (hasTokenExpired(token)) {
        console.log("Token expired, logging out...");

        // Використовуємо setTimeout, щоб уникнути зациклення
        setTimeout(() => store.dispatch(logout()), 0);
        
        return next(action); // Продовжуємо виконання інших middleware та reducer'ів
    }

    return next(action);
};

const hasTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp ? decoded.exp * 1000 < Date.now() : true;
    } catch (error) {
        console.error("Error decoding token:", error);
        return true; // Вважати некоректний токен протермінованим
    }
};