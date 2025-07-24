import styles from "./ContentLayout.module.css";

function ContentLayout(props) {
    return (
        <div className={`${styles.content_container} ${styles.content_auto_center}`} >
            {props.children}
        </div>
    );
}

export default ContentLayout;