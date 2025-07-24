import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Subscription from "../components/subscribe/Subscription";
import Wishlist from "../components/wishlist/Wishlist";
import MiniCart from "../components/cart/MiniCart";
import style from './pages.module.css';

export default function WishlistPage() {

    return (
        <>
            <Header></Header>
            <main className={style.mainPages}>
                <Wishlist></Wishlist>
                <Subscription />
            </main>
            <MiniCart />
            <Footer></Footer>
        </>
    );
}
