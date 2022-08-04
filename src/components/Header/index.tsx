import styles from './styles.module.scss';

export function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>&lt;duque.dev &#47;&gt;</h1>

            <div className={styles.navbar}>
                <ul>
                    <li>
                        <span>talk</span>
                    </li>
                    <li>
                        <span>about</span>
                    </li>
                    <li>
                        <span>tech</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
