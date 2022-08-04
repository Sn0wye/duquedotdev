import styles from './styles.module.scss';

export function Footer() {
    return (
        <div className={styles.footerArea}>
            <div className={styles.footerContent}>
                <div className={styles.leftFooter}>
                    <h2>find me</h2>
                    <p>digitally</p>
                    <span>© 2021 Felipe Duque</span>
                </div>
                <div className={styles.rightFooter}>
                    <ul>
                        <li>twitter</li>
                        <li>facebook</li>
                        <li>instagram</li>
                        <li>telegram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
