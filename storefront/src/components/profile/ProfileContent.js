import styles from './ProfileContent.module.css'

export default function ProfileContent({children}) {

    return <div className={styles.profileContent}>
        {children}
    </div>
}