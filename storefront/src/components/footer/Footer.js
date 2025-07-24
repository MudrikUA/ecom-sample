import styles from "./Footer.module.css"

import logoName from '../../assets/icons/logo_name.svg';
import logoPhoto from '../../assets/icons/logo_photo.svg';

export default function Footer() {
    return <>
        <footer className={styles.footer_container}>
            <div className={styles.footer_contant}>
                <div className={styles.site_info}>
                    <div className={styles.site_info_logo}>
                        <img src={logoPhoto} alt="Logo" />
                        <img src={logoName} alt="Wine and voyages" />
                    </div>
                    <div className={styles.blog_post}>
                        <p className={styles.blog_post_title}>Latest Blog Post</p>
                        <p className={styles.blog_post_name}>Ready to get started?</p>
                        <p className={styles.blog_post_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                 <div className={styles.footer_divider}></div>
                <div className={styles.footer_nav_block}>
                    <div className={styles.footer_nav}>
                        <div>
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer_terms}>
                        &copy; 2024
                        <a href="#">Privacy — Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </>;
} 