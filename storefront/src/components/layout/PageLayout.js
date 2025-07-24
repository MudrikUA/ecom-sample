import styles from "./PageLayout.module.css";

function PageLayout(props) {
    return (
        <div className={styles.all_places}>
            {props.children}
        </div>
    );
}

export default PageLayout;