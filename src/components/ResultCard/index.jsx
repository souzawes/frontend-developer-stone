import styles from './styles.module.css';

import { MdArrowBack } from 'react-icons/md';
import { IconContext } from 'react-icons';

const ResultCard = () => {
    return(
        <div className={styles.container}>
            <button className={styles.buttonBack} >
                <IconContext.Provider value={{  color: '#8C9CAD',
                                                verticalAlign: 'center',
                                                size: "24px"                    
                }}>

                <MdArrowBack />
                </IconContext.Provider>
                <p className={styles.buttonText}>Voltar</p>
            </button>
            <div className={styles.resultBlock}>
                <p className={styles.resultDescription}>O resultado do cálculo é:</p>
                <span className={styles.result}>R$ 240,00</span>
            </div>
            <div className={styles.descriptionBlock}>
                <p><b>Compra no dinheiro e taxa de</b> 5.3%
                <br></br>
                <b>Cotação do dólar:</b> $1,00 = R$ 5,20</p>
            </div>
        </div>
    );
}

export default ResultCard;