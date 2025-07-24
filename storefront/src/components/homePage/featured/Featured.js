import styles from "./Featured.module.css";
import ContentLayout from '../../layout/ContentLayout.js'

export default function Featured({items}) {
    return <div className={styles.benefits_section}><ContentLayout>
        <section id="benefits_section" className={styles.benefits_container}>
            {
                items?.map((item) => {
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
    </ContentLayout></div>;
}

