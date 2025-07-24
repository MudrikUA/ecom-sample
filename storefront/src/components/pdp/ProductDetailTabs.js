import styles from "./ProductDetailTabs.module.css";
import React, { useState, } from "react";
import ContentLayout from "../layout/ContentLayout";
import Rating from '@mui/material/Rating';

const img = "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const mock = [
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" }
]

const mockReviews = [
    { customerName: "test test", header: "Heritage", rating: 2, date: "11.22.2025", comment: "Chardonnay is a versatile white wine that can range from crisp and refreshing to rich and buttery. Its flavors often include notes of green apple, pear, and citrus, making it a delightful choice for any occasion." },
    { customerName: "test2 test2", header: "Heritage", rating: 4, date: "11.15.2025", comment: "This Chardonnay offers a beautiful balance of acidity and fruitiness, with hints of tropical fruits and a touch of oak. Perfect for pairing with seafood or enjoying on its own!" },
    { customerName: "test3 test3", header: "Heritage", rating: 5, date: "11.04.2025", comment: "With its smooth texture and vibrant flavors, this Chardonnay is a crowd-pleaser. Expect aromas of vanilla and honey, complemented by a refreshing finish." }
]

const SubContant = () => {
    return <div className={styles.productTabSubContentBlock}>
        <div className={styles.productTabVideo}>
            <iframe src="https://www.youtube.com/embed/1DokJjOwymM?si=A6pWK3DW6TbWlp3S&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen style={{ width: '100%', height: '100%' }}></iframe>
        </div>
        <div className={styles.productTabBenefits}>
            {mock.map((item, index) => (
                <div key={index} className={styles.benefitItem}>
                    <img src={item.imgSrc} alt={item.header} className={styles.benefitImage}
                        width={52} height={52} />
                    <div className={styles.benefitTextBlock}>
                        <p className={styles.benefitHeader}>{item.header}</p>
                        <p className={styles.benefitText}>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

const ReviewBlock = ({ review }) => {
    return <div className={styles.productTabReview}>
        <div className={styles.reviewHeaderBlock}>
            <div className={styles.reviewCustomerBlock}>
                <p className={styles.reviewCustomerName}>{review.customerName}</p>
                <Rating name="read-only" size="small" value={review?.rating} readOnly sx={{ '.MuiSvgIcon-root': { fill: "black" } }} />
            </div>
            <p className={styles.reviewDate}>{review.date}</p>
        </div>
        <p className={styles.reviewText}>{review.comment}</p>
    </div>
}

export default function ProductDetailTabs({ product }) {
    const [tabIndex, setTabIndex] = useState(1);

    return <ContentLayout>
        <div className={styles.productTabs}>
            <p className={`${styles.productTab} ${tabIndex === 1 ? styles.selectedTab : ''}`} onClick={() => setTabIndex(1)}>Descriptions</p>
            <p className={`${styles.productTab} ${tabIndex === 2 ? styles.selectedTab : ''}`} onClick={() => setTabIndex(2)}>Additional Information</p>
            <p className={`${styles.productTab} ${tabIndex === 3 ? styles.selectedTab : ''}`} onClick={() => setTabIndex(3)}>Customer Feedback</p>
        </div>
        {tabIndex === 1 ? <div className={styles.productTabContent}>
            <div className={styles.productTabMainContentBlock} dangerouslySetInnerHTML={{ __html: product?.descriptionLong }}>

            </div>
            <SubContant />
        </div> : <></>}
        {tabIndex === 2 ? <div className={styles.productTabContent}>
            <div className={styles.productTabMainContentBlock} >
                <div className={styles.productSecondTabContent}>
                    <p className={styles.productSecondTabParamKey}>Type: </p>
                    <p className={styles.productSecondTabParamValue}>White Wine</p>
                    <p className={styles.productSecondTabParamKey}>Color: </p>
                    <p className={styles.productSecondTabParamValue}>Pale yellow with greenish highlights</p>
                    <p className={styles.productSecondTabParamKey}>Varietal: </p>
                    <p className={styles.productSecondTabParamValue}>Chardonnay</p>
                    <p className={styles.productSecondTabParamKey}>Region: </p>
                    <p className={styles.productSecondTabParamValue}>Specify the origin (Burgundy)</p>
                    <p className={styles.productSecondTabParamKey}>Aroma: </p>
                    <p className={styles.productSecondTabParamValue}>Notes of citrus, green apple, and tropical fruit, with hints of vanilla and butter</p>
                    <p className={styles.productSecondTabParamKey}>Palate: </p>
                    <p className={styles.productSecondTabParamValue}>Crisp acidity balanced with flavors of ripe pear and a touch of oak</p>
                    <p className={styles.productSecondTabParamKey}>Finish: </p>
                    <p className={styles.productSecondTabParamValue}>Long and refreshing with lingering fruit notes</p>
                </div>
            </div>

            <SubContant />
        </div> : <></>}
        {tabIndex === 3 ? <div className={styles.productTabContent}>
            <div className={`${styles.productTabMainContentBlock} ${styles.reviewsContainer}`}>
                {mockReviews.map((review) => {
                    return <ReviewBlock review={review} />
                })}
            </div>

            <SubContant />
        </div> : <></>}
    </ContentLayout >
}