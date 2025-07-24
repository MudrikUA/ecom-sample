import React from 'react';
import style from './MiniCart.module.css';
import { selectCart, removeItemLine, hideMiniCart } from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import prodCatImg from '../../assets/images/prod_mock.png';
import CustomButton from '../custom/CustomButton';
import closeIcon from '../../assets/icons/close2.svg';

const MiniCart = () => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const handleRemoveFromList = (product) => {
        dispatch(removeItemLine(product));
    };

    return (<div className={`${style.miniCartModal} ${!cart.isMiniCartVisible ? style.hide : ''}`}>
        <div className={`${style.miniCart}`}>
            <div className={style.miniCartContainer}>
                <div className={style.miniCartHeader}>
                    <p className={style.miniCartHeaderText}>Shopping Card</p>
                    <button className={style.closeButton} onClick={() => { dispatch(hideMiniCart()) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M18.75 6.25L6.25 18.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.25 6.25L18.75 18.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className={style.miniCartItems}>
                    {cart.items.map((item) => (
                        <div key={item.id} className={style.cartItem}>
                            <img src={prodCatImg} alt={item.title} width={120} height={100} />
                            <div className={style.itemDetails}>
                                <p className={style.itemTitle}>{item.title}</p>
                                {/* <div className={style.quantitySelector}>
                                    <span className={style.quantityBtn} onClick={() => item && dispatch(addItem(item))}>+</span>
                                    <span className={style.quantity}>{item.quantity}</span>
                                    <span className={style.quantityBtn} onClick={() => item && dispatch(removeItem(item))}>-</span>
                                </div> */}
                                <span className={style.tottalPrice}>{item.quantity} pc x <span>${item.totalPrice.toFixed(2)}</span></span>
                            </div>
                            <img src={closeIcon} alt="Heart" width={24} height={24}
                                onClick={() => { handleRemoveFromList(item) }} />
                        </div>

                    ))}
                </div>
            </div>

            <div className={style.miniCartFooter}>
                <div className={style.total}>
                    <p>{cart.totalQuantity} Product</p>
                    <span>${cart.totalAmount.toFixed(2)}</span>
                </div>
                <div className={style.buttonGroup}>
                    <Link to="/cart">
                        <CustomButton isPrimary={true}>View cart</CustomButton>
                    </Link>
                    <Link to="/checkout">
                        <CustomButton isPrimary={false}>Checkout</CustomButton>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MiniCart;