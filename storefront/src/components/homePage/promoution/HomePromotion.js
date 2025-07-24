import PromotionBigTile from "./PromotionBigTile.js";
import PromotionSmallTile from "./PromotionSmallTile.js";
import ContentLayout from '../../layout/ContentLayout.js'

import styles from "./HomePromotion.module.css";

export default function HomePromotion(props) {
    return <ContentLayout>
        <section id="promo_section" className={styles.section}>
            <div className={`${styles.promo_container}`} >
                <PromotionBigTile discont={props.discconts[0]} />
                <div className={styles.secondary_promo_group}>
                    <PromotionSmallTile discont={props.discconts[0]} />
                    <PromotionSmallTile discont={props.discconts[0]} />
                </div>
            </div>
        </section>
    </ContentLayout>;
}

