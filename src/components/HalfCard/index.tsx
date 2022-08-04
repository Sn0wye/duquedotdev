import styles from './styles.module.scss';

export function HalfCards() {
    return (
        <div className={styles.cardAreaHalf}>
            <div className={styles.cardHalf}>
                <div className={styles.assetAreaHalf} />
                <div className={styles.titleAreaHalf}>
                    <div className={styles.cardTitleHalf}>
                        <p>desafios</p>
                        <p>ativos</p>
                    </div>
                    <div className={styles.cardLinkHalf}>
                        <span>github</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
