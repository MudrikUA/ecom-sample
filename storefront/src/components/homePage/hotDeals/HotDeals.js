import styles from "./HotDeals.module.css";
import ContentLayout from '../../layout/ContentLayout.js'
import ProductsTile from '../../product/ProductTile.js'
import ProductsBigTile from '../../product/ProductBigTile.js'

const img = "ee895f55-91a0-41f4-8159-315ccfb093e7.jpg"
const mock = [
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, ratingCount: 343, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, ratingCount: 412, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, ratingCount: 512, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, ratingCount: 435, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, ratingCount: 345, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, ratingCount: 463, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, ratingCount: 346, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, ratingCount: 226, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, ratingCount: 554, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, ratingCount: 627, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, ratingCount: 235, currency: "$" },
    { id:20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, ratingCount: 789, currency: "$" },
]

export default function HotDeals(props) {
    return <ContentLayout>
        <div className={styles.hot_deal_header_container}>
            <p className={styles.hot_deal_header}>Hot Deals</p>
            <a href="#">View All</a>
        </div>
        <div className={styles.hot_deal_container}>
            <ProductsBigTile product={mock[0]}></ProductsBigTile>
            {mock.slice(1).map((product) => {
                return <ProductsTile product={product}></ProductsTile>
            })}
        </div>
    </ContentLayout>;
}

