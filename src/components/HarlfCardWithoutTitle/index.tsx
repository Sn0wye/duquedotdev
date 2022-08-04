import styles from './styles.module.scss';

export function HalfCardWithoutTitle() {
    return (
        <div className={styles.cardAreaHalf}>
            <div className={styles.cardHalf} />
        </div>
    );
}
