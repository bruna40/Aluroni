import styles from './style.module.scss';
import { Buscador } from '../../components/Buscador';
import { useState } from 'react';
import { Filtros } from '../../components/Filtros';
import { Ordenador } from '../../components/Ordenador';
import { Itens } from '../../components/Itens';

export function Cardapio() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('null');
  return (
    <section className={ styles.section }>
      <h3 className={ styles.setion__title}>Cardápio</h3>
      <Buscador 
        value={ search }
        onChange={ setSearch }
      />
      <div className= {styles.section__filtros}>
        <Filtros
          filter={ filter }
          setFilter={ setFilter }
        />
        <Ordenador
          order={ order }
          setOrder={ setOrder }
        />
      </div>
      <Itens
        value={ search }
        order={ order }
        filter={ filter }
      />
    </section>
  );
}