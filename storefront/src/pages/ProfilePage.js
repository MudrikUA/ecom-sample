import React, { useEffect } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Subscription from "../components/subscribe/Subscription";
import Profile from '../components/profile/Profile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from "../features/auth/authSlice"
import MiniCart from "../components/cart/MiniCart";
import style from './pages.module.css';

export default function CartPage() {
    const auth = useSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.token) {
            navigate('/login');
        }
    });
    return (
        <>
            <Header></Header>

            <main className={style.mainPages}>
                <Profile></Profile>
                <Subscription />
            </main>
            <MiniCart />
            <Footer></Footer>
        </>
    );
}
