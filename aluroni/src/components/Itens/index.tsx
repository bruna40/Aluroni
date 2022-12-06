import cardapio from '../../Data/itens.json';
import styles from './style.module.scss';
import classNames from 'classnames';
import { IItens } from '../../@types/Itens';
import { useEffect, useState } from 'react';

export function Itens({value, order, filter}: IItens) {
  const [list, setList] = useState(cardapio);

  function testaBusca(titulo: string) {
    const regex = new RegExp(value, 'i');
    return regex.test(titulo);
  }

  function testaFiltro(id:number) {
    if(filter) return filter === id;
    return true;
  }

  function ordenador(lista:typeof cardapio) {
    switch(order) {
    case 'porcao':
      return lista.sort((a,b) => a.size - b.size);
    case 'preco':
      return lista.sort((a,b) => a.price - b.price);
    case 'qtd_pessoas':
      return lista.sort((a,b) => a.serving - b.serving);
    default:
      return lista;

    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter((item) => 
      testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setList(ordenador(novaLista));
  },[filter, value, order]);
  return(
    <div className={styles.itens}>
      {
        list.map((item) => (
          <div className={styles.item} key={item.id}>
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
  );
}
