import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import style from './Auth.module.css';

const Authentication = () => {
    const [isShowLogin, setIsShowLogin] = useState(true);

    return <div className={style.authBlock}>
        <p className={style.authHeader}>Sign in</p>
        <div className={style.authTabsGroup}>
            <div className={`${style.authTab} ${isShowLogin === true ? style.authSelectedTab : style.authTab}`} onClick={() => setIsShowLogin(true)}>
                <span>Authentication</span>
            </div>
            <div className={`${style.authTab} ${isShowLogin !== true ? style.authSelectedTab : style.authTab}`} onClick={() => setIsShowLogin(false)}>
                <span>Registration</span>
            </div>
        </div>
        {
            isShowLogin ?
                <Login></Login> : <Registration></Registration>
        }
        {
            isShowLogin ?
                <div className={style.authQuestion}>Don't have account? <span onClick={() => setIsShowLogin(false)}>Register</span></div> :
                <div className={style.authQuestion}>Already have account? <span onClick={() => setIsShowLogin(true)}>Login</span></div>
        }



    </div>
}

export default Authentication