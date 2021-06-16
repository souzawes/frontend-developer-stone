import styles from './styles.module.css';

const Header = () => {
    return(
        <header className={styles.container}>
            <img className={styles.logo} src="images/logo.png" alt="Logotipo"/>
            <div>
                <span>14 de janeiro 2021    |     21:00 UTC</span>
                <p>Dados de câmbio disponibilizados pela Morningstar.</p>
            </div>
        </header>
    );
}

export default Header;