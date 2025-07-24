import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Subscription from "../components/subscribe/Subscription";
import Cart from "../components/cart/Cart";
import style from './pages.module.css';

export default function CartPage() {

    return (
        <>
            <Header></Header>
            <main className={style.mainPages}>
                <Cart></Cart>
                <Subscription />
            </main>
            <Footer></Footer>
        </>
    );
}
