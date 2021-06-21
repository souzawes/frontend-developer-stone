import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.css';

const Header = () => {

    const currentDate =  format(new Date(), "d 'de' MMMM yyyy", {
        locale: ptBR,
    });

    const currentHour = format(new Date(), "h':'mm OOO", {
        locale: ptBR,
    });

    return(
        <header className={styles.container}>
            <img className={styles.logo} src="images/logo.png" alt="Logotipo"/>
            <div>
                <span> {currentDate}    |     {currentHour}</span>
                <p>Dados de câmbio disponibilizados pela Morningstar.</p>
            </div>
        </header>
    );
}

export default Header;