import React, { useState } from 'react';
import style from './Wishlist.module.css';

import WishlistContant from './WishlistContant';

import axios from 'axios';
import ContentLayout from '../layout/ContentLayout';

const Wishlist = () => {
    return <ContentLayout><div className={`${style.wishlist} `}>
        <p className={style.wishlistTitle}>Wishlist</p>
        <WishlistContant></WishlistContant>
    </div>
    </ContentLayout>
};

export default Wishlist;