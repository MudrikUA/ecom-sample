import styles from './ProfileWishlist.module.css'
import WishlistContant from "../../../components/wishlist/WishlistContant";

export default function ProfileWishlist({auth}) {

    return <div>
        <p className={styles.formHeader}>Wishlist</p>
        <WishlistContant></WishlistContant>
    </div>
}