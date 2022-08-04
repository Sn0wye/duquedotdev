import styles from './styles.module.scss';

export function RepositoriesCards() {
    return (
        <div className={styles.cardAreaRepository}>
            <div className={styles.cardRepository}>
                <div className={styles.assetAreaRepository} />
                <div className={styles.assetAreaRepository} />
                <div className={styles.assetAreaRepository} />
            </div>
        </div>
    );
}
