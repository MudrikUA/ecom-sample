import React from 'react';
import style from './Cart.module.css';
import {
    selectCart,
} from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import ContentLayout from '../layout/ContentLayout.js'
import ProductLineTile from '../product/ProductLineTile.js'
import CustomButton from '../custom/CustomButton.js'
import EmptyCart from './EmptyCart.js'

const Cart = () => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    return <>{cart.items.length ? <ContentLayout>
        <p className={style.cartTitle}>My Shopping Cart</p>
        <div className={`${style.cart}`}>
        <div className={style.cartItemsContainer}>
            <div className={style.cartItems}>
                {cart.items.map((item) => (
                    <ProductLineTile product={item} isCart={true}></ProductLineTile>
                ))}
            </div>
        </div>

        <div className={style.cartSumary}>
            <p className={style.cartSumaryTitle}>Cart Total</p>
            <div className={style.total}>
                <div className={`${style.cartSumaryLine} ${style.cartSumaryLineHighlight}`}>
                    <p>Sub total:</p>
                    <span>${cart.totalAmount.toFixed(2)}</span>
                </div>
                <div className={`${style.cartSumaryLine} ${style.cartSumaryLineHighlight}`}>
                    <p>Shipping total: </p>
                    <span>0</span>
                </div>
                <div className={style.cartSumaryLine}>
                    <p>Total: </p>
                    <span>${cart.totalAmount.toFixed(2)}</span>
                </div>
                <Link to="/checkout">
                    <CustomButton isPrimary={true}>Checkout</CustomButton>
                </Link>
            </div>

        </div>
    </div>
    </ContentLayout> : <EmptyCart />
    }</>
};

export default Cart;