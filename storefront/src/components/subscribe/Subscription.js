import styles from "./Subscription.module.css"
import fbIcon from '../../assets/icons/fb.svg';
import instIcon from '../../assets/icons/inst.svg';
import twIcon from '../../assets/icons/tw.svg';
import pintIcon from '../../assets/icons/pint.svg';

export default function Subscribe() {
    return <>
        <div className={styles.subscribe_container}>
            <div className={styles.subscribe_contant}>
                <div className={styles.subscribe_title_container}>
                    <h2 className={styles.subscribe_title}>Subscribe to our newsletter</h2>
                    <p className={styles.subscribe_desc}>Subscribe to our newsletter and get 10% off your first purchase</p>
                </div>
                <div className={styles.subscribe_input_container}>
                    <input className={styles.subscribe_input} type="text" placeholder="Your email address" />
                    <button className={styles.subscribe_button}>Subscribe</button>
                </div>
                <div className={styles.subscribe_socials_container}>
                    <a className={styles.subscribe_socials} href="https://facebook.com/">
                        <img src={fbIcon} alt="Facebook" width={18} height={18} />
                    </a>
                    <a className={styles.subscribe_socials} href="https://x.com/">
                        <img src={twIcon} alt="Twitter" width={18} height={18} />
                    </a>
                    <a className={styles.subscribe_socials} href="https://pinterest.com/">
                        <img src={pintIcon} alt="Pinterest" width={18} height={18} />
                    </a>
                    <a className={styles.subscribe_socials} href="https://instagram.com/">
                        <img src={instIcon} alt="Instagram" width={18} height={18} />
                    </a>
                </div>
            </div>
        </div>
    </>;
} 