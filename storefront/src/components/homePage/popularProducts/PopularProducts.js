import styles from "./PopularProducts.module.css";
import ContentLayout from '../../layout/ContentLayout.js'
import ProductsTile from '../../product/ProductTile.js'


const img = "ee895f55-91a0-41f4-8159-315ccfb093e7.jpg"
const mock = [
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 4.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, currency: "$" },
    { id: 20, images: [img], title: "Some Wine", price: 90, discontPrice: 75, rating: 3.3, currency: "$" },
]


export default function PopularProducts(props) {
    return <ContentLayout>
        <section id="benefits_section">
            <div className={styles.popular_products_container}>
                <p className={styles.popular_products_header}>Popular Products</p>
                <a href="#">View All</a>
            </div>
            <div className={styles.popular_products_grid}>
                {
                    mock.map((product) => {
                        return <ProductsTile product={product}></ProductsTile>
                    })
                }
            </div>
        </section>
    </ContentLayout>;
}

