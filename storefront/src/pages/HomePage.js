import Header from "../components/header/Header";
import HomePromotion from "../components/homePage/promoution/HomePromotion";
import Featured from "../components/homePage/featured/Featured";
import TopCategory from "../components/homePage/topCategory/TopCategory";
import Footer from "../components/footer/Footer";
import Subscription from "../components/subscribe/Subscription";
import PopularProducts from "../components/homePage/popularProducts/PopularProducts";
import HotDeals from "../components/homePage/hotDeals/HotDeals";
import style from './pages.module.css';

const discconts = [{
    title: "Montenegrin White Wine Tour",
    price: "150 $",
    discont: "30%",
    description: " Embark on a delightful journey ",
    img: "testImg1",
    link: "test link"
}]

const img = "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const mock = [
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
]



export default function HomePage() {

    return (
        <>
            <Header></Header>
            <main className={style.mainPages}>
                <HomePromotion discconts={discconts} />
                <Featured items={mock}/>
                <TopCategory/>
                <PopularProducts/>
                <HotDeals></HotDeals>
                {/*  <section id="top_products_section" className={styles.section}>
                    <h1>Top Category</h1>
                    <div className={styles.top_products_carousel}>
                        <button className={styles.top_products_carousel_prev}></button>
                        <div className={styles.top_products_carousel_tile}>
                            <img
                                className={styles.top_products_carousel_tile_img}
                                src=""
                                alt="Item1"
                            />
                            <p className={styles.top_products_carousel_tile_title}>Item 1</p>
                            <p className={styles.top_products_carousel_tile_desc}>Products</p>
                        </div>
                        <div className={styles.top_products_carousel_tile}>
                            <img
                                className={styles.top_products_carousel_tile_img}
                                src=""
                                alt="Item1"
                            />
                            <p className={styles.top_products_carousel_tile_title}>Item 1</p>
                            <p className={styles.top_products_carousel_tile_desc}>Products</p>
                        </div>
                        <div className={styles.top_products_carousel_tile}>
                            <img
                                className={styles.top_products_carousel_tile_img}
                                src=""
                                alt="Item1"
                            />
                            <p className={styles.top_products_carousel_tile_title}>Item 1</p>
                            <p className={styles.top_products_carousel_tile_desc}>Products</p>
                        </div>
                        <div className={styles.top_products_carousel_tile}>
                            <img
                                className={styles.top_products_carousel_tile_img}
                                src=""
                                alt="Item1"
                            />
                            <p className={styles.top_products_carousel_tile_title}>Item 1</p>
                            <p className={styles.top_products_carousel_tile_desc}>Products</p>
                        </div>
                        <div className={styles.top_products_carousel_tile}>
                            <img
                                className={styles.top_products_carousel_tile_img}
                                src=""
                                alt="Item1"
                            />
                            <p className={styles.top_products_carousel_tile_title}>Item 1</p>
                            <p className={styles.top_products_carousel_tile_desc}>Products</p>
                        </div>
                        <button className={styles.top_products_carousel_next}></button>
                    </div>
                </section>
                <section id="popular_products_section" className={styles.section}>
                    <h1>Popular Products</h1>
                    <button className={styles.popular_products_all}>View All<img /></button>
                    <div className={styles.popular_products_tile}>
                        <img className={styles.popular_products_tile_img} src="" alt="Item1" />
                        <p className={styles.popular_products_tile_title}>NAME</p>
                        <p className={styles.popular_products_tile_prices}>
                            $price<span>$price</span>
                        </p>
                        <div className={styles.popular_products_tile_rating}>ratingInsert</div>
                        <button className={styles.popular_products_tile_atc} alt="Add to cart">
                            <img />
                        </button>
                    </div>
                </section>
                <section id="quick_buy_section" className="section">
                    <div className={styles.quick_buy_tile}>
                        <p className={styles.quick_buy_tile_title}>Red wine</p>
                        <button className={styles.quick_buy_tile_atc}>Add to Cart</button>
                    </div>
                </section>
                <section id="hot_deals_section" className={styles.section}></section>
                <section id="top_categories_section" className={styles.section}></section>
                <section id="members_section" className={styles.section}></section>
                <section id="subscription_section" className={styles.section}></section> */}
                <Subscription />
            </main>
            <Footer></Footer>
        </>
    );
}
