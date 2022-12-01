import cardapio from '../../utils/itens.json';
import styles from './style.module.scss';
import classNames from 'classnames';

export function Itens() {
    return(
        <div className={styles.itens}>
           {
                cardapio.map((item) => (
                    <div className={styles.item}>
                       <div className={styles.item__img}>
                            <img src={item.photo} alt={item.title} />
                       </div>
                       <div className={styles.item__description}>
                            <div className={styles.item__title}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className={styles.item__tags}>
                            <div className={classNames({[styles.item__tipo]:true,[styles[`item__tipo__${item.category.label.toLowerCase()}`]]: true,
                            })}>
                                <p>{item.category.label}</p>
                            </div>
                            <div className={styles.item__porcao}>
                                <p>{item.size}g</p>
                            </div>
                            <div className={styles.item__qtd}>
                                <p>Serve {item.serving} pessoa
                                {item.serving > 1 ? 's' : ''}</p>
                            </div>
                            <div className={styles.item__price}>
                                <p>R$ {item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))
           }
        </div>
    )
}