import glassFullIcon from '../../assets/icons/glass-full.svg';
import glassEmpIcon from '../../assets/icons/glass-emp.svg';
import styles from "./CheckoutProgressBar.module.css"

const CheckoutProgressBar = ({ checkoutStep }) => {
    return <div className={styles.progressGroup}>
        <div className={`${styles.progressObject} ${checkoutStep === "shipping" ? styles.progressSelectedText : styles.progressText}`}>
            <img src={glassFullIcon}
                alt="Location"
                width={16}
                height={24} />
            Shipping
        </div>
        <div className={styles.progressSplitter}></div>
        <div className={`${styles.progressObject} ${checkoutStep === "billing" ? styles.progressSelectedText : styles.progressText}`}>
            <img src={checkoutStep === "billing" || checkoutStep === "confirmation" ? glassFullIcon : glassEmpIcon}
                alt="Location"
                width={16}
                height={24} />
            Billing
        </div>
        <div className={styles.progressSplitter}></div>
        <div className={`${styles.progressObject} ${checkoutStep === "confirmation" ? styles.progressSelectedText : styles.progressText}`}>
            <img src={checkoutStep === "confirmation" ? glassFullIcon : glassEmpIcon}
                alt="Location"
                width={16}
                height={24} />
            Confirm
        </div>
    </div>
}

export default CheckoutProgressBar;