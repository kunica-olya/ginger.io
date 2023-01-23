import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles['bright-background']}></div>
                <div className={styles['blurred-background']}></div>
                <div className={styles['additional-background']}></div>
                <nav className={styles.navigation}>
                    <ul>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </nav>
                <div className={styles.contacts}>
                    <a className={styles.location} href="#">
                        Kyiv, st. Shevchenko, 24
                    </a>
                    <a className={styles.phone} href="tel:066-05-10-749">066 05 10 749</a>
                </div>
            </header>
        </div>
    )
}
export default Header;

