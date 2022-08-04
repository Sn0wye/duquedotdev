import styles from './styles.module.scss';

export function TopText() {
    return (
        <div className={styles.toptext}>
            <div className={styles.first}>
                <p>
                    um <span>QA engineer</span>
                </p>
            </div>

            <div className={styles.second}>
                <p>
                    de <span>marcas </span>
                    de propósito
                </p>
            </div>
        </div>
    );
}
