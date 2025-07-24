import styles from "./ProductDetail.module.css";
import React, { useState, } from "react";
import ProductCarousel from "./ProductCarousel";
import Rating from '@mui/material/Rating';
import ContentLayout from "../layout/ContentLayout";
import QuantitySelector from "../custom/QuantitySelector";
import CustomButton from "../custom/CustomButton";
import { useDispatch } from "react-redux";
import { toggleItem } from "../../features/wishlist/wishlistSlice";
import { addFewItems } from "../../features/cart/cartSlice";

export default function ProductDetail({ product }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if (quantity < product.stock.quantity) {
            setQuantity((prev) => {
                return prev = Number(prev) + 1;
            })
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => {
                return prev = Number(prev) - 1;
            })
        }
    };

    const handleAddToWishlist = (event) => {
        event.preventDefault();
        dispatch(toggleItem(product.id));
    };

    return (product ? <ContentLayout>
        <div className={styles.productDetail}>
            <ProductCarousel images={product?.images}></ProductCarousel>
            <div className={styles.productDetailContainer}>
                <div>
                    <p className={styles.productDetailTitle}>{product.title}</p>
                    <div className={styles.productRatingBlock}>
                        <Rating name="read-only" size="small" value={product?.rating} readOnly sx={{ '.MuiSvgIcon-root': { fill: "black" } }} />
                        <p className={styles.productDetailSku}>SKU:<span>{product.sku}</span></p>
                    </div>

                    <p className={styles.productDetailCategory}>Category:<span>{product.category.name}</span></p>
                    <div className={styles.productDetailPrices}>
                        <p className={styles.productDetailPriceDisconted}>$price disc</p>
                        <p className={styles.productDetailPrice}>${product.price}</p>
                    </div>

                </div>
                <div className={styles.productDetailDescriptionBlock}>
                    <div className={styles.productDetailBrandAndShareBlock}>
                        <p className={styles.productDetailBrand}>Brand: {product.brand.name}</p>
                        <div className={styles.productDetailShareBlock}>
                            <p className={styles.productDetailShareItem}>Share item:</p>
                        </div>
                    </div>
                    <p className={styles.productDetailDescription}>{product.descriptionShort}</p>
                </div>

                <div className={styles.productDetailActionsGroup}>
                    <div className={styles.productDetailCountSelector}>
                        <QuantitySelector increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            quantity={quantity}></QuantitySelector>
                    </div>
                    <div className={styles.productDetailAtcBtn}>
                        <CustomButton isPrimary={true} onClick={() => { dispatch(addFewItems({ item: product, itemQuantity: quantity })) }}>
                            <div className={styles.productDetailAtcBtn}>Add to cart
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></div>
                        </CustomButton>
                    </div>
                    <div className={styles.productDetailWishlistBtn} onClick={handleAddToWishlist}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <path d="M22.94 32.25C22.94 32.25 12 26.125 12 18.6875C12 17.3727 12.4556 16.0985 13.2894 15.0817C14.1232 14.0649 15.2836 13.3683 16.5731 13.1105C17.8627 12.8526 19.2018 13.0494 20.3626 13.6674C21.5234 14.2854 22.4342 15.2863 22.94 16.5V16.5C23.4458 15.2863 24.3566 14.2854 25.5174 13.6674C26.6782 13.0494 28.0173 12.8526 29.3069 13.1105C30.5964 13.3683 31.7568 14.0649 32.5906 15.0817C33.4244 16.0985 33.88 17.3727 33.88 18.6875C33.88 26.125 22.94 32.25 22.94 32.25Z" stroke="#2F3233" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </ContentLayout> : <div className={styles.pdpPlaceHolder}></div>)
}