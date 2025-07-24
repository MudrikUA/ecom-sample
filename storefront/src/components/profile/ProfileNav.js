import styles from './ProfileNav.module.css'
import arrowRightIcon from '../../assets/icons/arrow_right.svg';
import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { selectAuth, logout } from "../../features/auth/authSlice";
import { useDispatch } from 'react-redux';


export default function ProfileNav({ location }) {
    const [selectedMenu, setSelectedMenu] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(location.pathname)
    const logoutAction = () => {
        dispatch(logout());
        navigate("/");
    };

    return <div className={styles.profileNav}>
        <Link className={`${styles.profileNavEl} ${location.pathname === '/profile/account' ? styles.selected : ""}`} to={"/profile/account"}>
            Account Overview
            <img src={arrowRightIcon} alt="Join now" width={15} height={15} />
        </Link>
        <Link className={`${styles.profileNavEl} ${location.pathname === '/profile/orders' ? styles.selected : ""}`} to={"/profile/orders"}>
            Order History
            <img src={arrowRightIcon} alt="Join now" width={15} height={15} />
        </Link>
        <Link className={`${styles.profileNavEl} ${location.pathname === '/profile/personal-data' ? styles.selected : ""}`} to={"/profile/personal-data"}>
            Personal Data
            <img src={arrowRightIcon} alt="Join now" width={15} height={15} />
        </Link>
        <Link className={`${styles.profileNavEl} ${location.pathname === '/profile/change-password' ? styles.selected : ""}`} to={"/profile/change-password"}>
            Change password
            <img src={arrowRightIcon} alt="Join now" width={15} height={15} />
        </Link>
        <Link className={`${styles.profileNavEl} ${location.pathname === '/profile/wishlist' ? styles.selected : ""}`} to={"/profile/wishlist"}>
            Wishlist
            <img src={arrowRightIcon} alt="Join now" width={15} height={15} />
        </Link>
        <Link className={`${styles.profileNavEl} ${location.pathname === '/profile/delete' ? styles.selected : ""}`} to={"/profile/delete"}>
            Account Removal
            <img src={arrowRightIcon} alt="Join now" width={15} height={15} />
        </Link>

        <div className={`${styles.profileNavEl} ${location.pathname === '' ? styles.selected : ""}`} onClick={logoutAction}>
            Sign out
            <img src={arrowRightIcon} alt="Join now" width={15} height={15} />
        </div>
    </div>
}