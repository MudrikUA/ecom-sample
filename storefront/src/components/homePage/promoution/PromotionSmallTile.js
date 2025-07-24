import styles from "./PromotionSmallTile.module.css";
import PromoNov from '../../../assets/icons/promo_now.svg';

export default function PromotionSmallTile({discont}) {
    return <>
        <div className={styles.secondary_promo_container}>
            <div className={styles.secondary_promo_content}>
                <p className={styles.secondary_promo_title}>
                    {discont.title}
                </p>
                <p className={styles.secondary_promo_discont}>{discont.discont}</p>
                <a href={discont.link} className={styles.secondary_promo_button}>BUY NOW
                    <img src={PromoNov} alt="BUY NOW" width={24} height={24} />
                </a>
            </div>
        </div></>;
}