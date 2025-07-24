import styles from "./TopCategoryTile.module.css";
import ContentLayout from '../../layout/ContentLayout.js'

const img = "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const mock = [
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
]


export default function TopCategoryTile(props) {
    return <ContentLayout>
        <section id="benefits_section" className={styles.benefits_container}>
            {
                mock.map((item) => {
                    return <div className={styles.benefits_tile}>
                        <img className={styles.benefits_img} src={item.imgSrc}
                            alt={item.header} width={52} height={52} />
                        <div className={styles.benefits_group} >
                            <p className={styles.benefits_title}>{item.header}</p>
                            <p className={styles.benefits_text}>{item.text}</p>
                        </div>
                    </div>
                })
            }

        </section>
    </ContentLayout>;
}

