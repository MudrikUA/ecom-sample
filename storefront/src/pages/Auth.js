import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth, } from "../features/auth/authSlice";
import Authentication from '../components/auth/Authentication';
import Subscribe from '../components/subscribe/Subscription';
import style from './pages.module.css';

export default function Auth() {
    const auth = useSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.token) {
            navigate('/profile/account');
        }
    })

    return (
        <>
            <Header></Header>
            <main className={style.mainAuth}>
                <Authentication></Authentication>
                <Subscribe></Subscribe>
            </main>
            <Footer></Footer>
        </>
    );
}
