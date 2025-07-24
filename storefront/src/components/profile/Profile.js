import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ContentLayout from '../layout/ContentLayout';
import { selectAuth, updateUser} from "../../features/auth/authSlice"
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProfileNav from './ProfileNav';
import ProfileContent from './ProfileContent';
import AccountOverview from './contents/AccountOverview';
import ChangePassword from './contents/ChangePassword';
import ProfileOrders from './contents/ProfileOrders';
import PersonalData from './contents/PersonalData';
import ProfileDelete from './contents/ProfileDelete';
import ProfileWishlist from './contents/ProfileWishlist';
import styles from './Profile.module.css'


export default function Profile({ profile }) {
    const auth = useSelector(selectAuth);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!auth.token) {
            navigate('/login');
        }
    }, []);

    let profileContent;
    switch (location.pathname) {
        case '/profile/account':
            profileContent = <AccountOverview auth={auth}></AccountOverview>;
            break;
        case '/profile/orders':
            profileContent = <ProfileOrders auth={auth}></ProfileOrders>;
            break;
        case '/profile/personal-data':
            profileContent = <PersonalData auth={auth} updateUser={updateUser}></PersonalData>;
            break;
        case '/profile/change-password':
            profileContent = <ChangePassword auth={auth}></ChangePassword>;
            break;
        case '/profile/wishlist':
            profileContent = <ProfileWishlist auth={auth}></ProfileWishlist>;
            break;
        case '/profile/delete':
            profileContent = <ProfileDelete auth={auth}></ProfileDelete>;
            break;
        default:
            break;
    }

    return <ContentLayout>
        <h1>My Account</h1>
        <div className={styles.profile}>
            <ProfileNav location={location}></ProfileNav>
            <ProfileContent>
                {profileContent}
            </ProfileContent>
        </div>
    </ContentLayout>
}