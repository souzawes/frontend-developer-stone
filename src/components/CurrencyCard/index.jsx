import styles from './styles.module.css';

import { IconContext } from "react-icons";
import { FaExchangeAlt } from 'react-icons/fa'

const CurrencyCard = () => {
    return(
        <div className={styles.container}>
            <form>
                <div className={styles.formBlock}>
                    <div className={styles.field}>
                        <p className={styles.labelNumbers}>Dolár</p>
                        <input type="text" placeholder="$ 0,00" />
                    </div>
                    <div className={styles.field}>
                        <p className={styles.labelNumbers}>Taxa de estado</p>                        
                        <input type="text" placeholder="0 %" />
                    </div>
                </div>
                <div className={styles.radioBlock}>
                    <p className={styles.labelType}>Tipo de compra</p>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioButton}>
                            <input type="radio" value="cash" name="payment" /> 
                            <span>Dinheiro</span>
                        </label>
                        <label className={styles.radioButton}>
                            <input type="radio" value="card" name="payment" /> 
                            <span>Cartão</span>
                        </label>
                    </div>
                </div>
                <button className={styles.convertButton}>
                <div className={styles.icon}>
                    <IconContext.Provider value={{  color: "white", 
                                                    verticalAlign: 'center',
                                                    size: "24px",
                                                    className: "exchange" }}>
                        <FaExchangeAlt />                        
                    </IconContext.Provider>
                </div>
                <span className={styles.textButton}>Converter</span>
                </button>
            </form>
        </div>
    );
}

export default CurrencyCard;