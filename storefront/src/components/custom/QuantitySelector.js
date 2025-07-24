import styles from './QuantitySelector.module.css'

export default function QuantitySelector({ increaseQuantity, decreaseQuantity, quantity }) {
    return <div className={styles.quantitySelector}>
        <span className={styles.quantityBtn} onClick={decreaseQuantity}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.33203 7H11.6654" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
        <span className={styles.quantity}>{quantity}</span>
        <span className={styles.quantityBtn} onClick={increaseQuantity}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.33203 7.00065H11.6654M6.9987 2.33398V11.6673V2.33398Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </span>
    </div>
}


