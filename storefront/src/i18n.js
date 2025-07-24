// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    uk: {
        translation: {
            nav_bar_product_catalog: 'Каталог Продуктів',
            hello: 'Привіт',
            settings: 'Налаштування'
        }
    },
    en: {
        translation: {
            nav_bar_product_catalog: 'Product Catalog',
            hello: 'Hello',
            settings: 'Settings'
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Мова за замовчуванням
        fallbackLng: 'uk', // Запасна мова
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;