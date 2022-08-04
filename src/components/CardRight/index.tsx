import styles from './styles.module.scss';

export function CardRight() {
    return (
        <div className={styles.cardAreaRight}>
            <div className={styles.cardRight}>
                <div className={styles.assetAreaRight} />
                <div className={styles.titleAreaRight}>
                    <div className={styles.cardTitleRight}>
                        <p>saiba</p>
                        <p>mais</p>
                        <p>sobre</p>
                        <p>mim</p>
                    </div>
                    <div className={styles.cardLinkRight}>
                        <span>about</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
