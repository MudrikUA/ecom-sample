import styles from "./PromotionBigTile.module.css";
import PromoNov from '../../../assets/icons/promo_now.svg';

export default function PromotionBigTile({discont}) {
    return <>
        <div className={styles.main_promo_container}>
            <div className={styles.main_promo_contant}>
                <p className={styles.main_promo_title}>{discont.title}</p>
                <div className={styles.main_promo_details}>
                    <div className={styles.main_promo_price_block}>
                        <p className={styles.main_promo_price}>{discont.price}</p>
                        <div className={styles.main_promo_price_discont}>{discont.discont}</div>
                    </div>
                    <p className={styles.main_promo_descritpion}>
                        {discont.description}
                    </p>
                </div>
                <a href={discont.link} className={styles.main_promo_button}>BUY NOW
                    <img src={PromoNov} alt="BUY NOW" width={24} height={24} />
                </a>
            </div>
        </div></>;
}