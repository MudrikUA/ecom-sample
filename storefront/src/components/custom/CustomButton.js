import styles from './CustomButton.module.css'

export default function CustomButton({ onClick, isPrimary, type, children }) {

    return <button type={type} className={`${styles.button} ${isPrimary ? styles.primary : styles.secondaty}`}
        onClick={onClick}>{children}</button>
}