import styles from './styles.module.scss';

export function CardLeft() {
    return (
        <div className={styles.cardAreaLeft}>
            <div className={styles.cardLeft}>
                <div className={styles.titleAreaLeft}>
                    <div className={styles.cardTitleLeft}>
                        <p>minha</p>
                        <p>formação </p>
                        <p>profissional</p>
                    </div>
                    <div className={styles.cardLinkLeft}>
                        <span>tech</span>
                    </div>
                </div>
                <div className={styles.assetAreaLeft} />
            </div>
        </div>
    );
}
