import styles from './styles.module.scss';

export function TechCardsTextMidle() {
    return (
        <div className={styles.techCardsTextLeft}>
            <div className={styles.techCardsTextLeftArea}>
                <div className={styles.techCardsTextLeftCard} />
                <div className={styles.techCardsTextLeftFirstCard}>
                    <h3>ai & ml</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500.
                    </p>
                </div>
                <div className={styles.techCardsTextLeftCard} />
            </div>
        </div>
    );
}
