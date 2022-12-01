import styles from './style.module.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { Buscador } from '../../components/Buscador';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Filtros } from '../../components/Filtros';
import { Ordenador } from '../../components/Ordenador';

export function Cardapio() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null)
    const [order, setOrder] = useState('null')
    return (
        <main>
            <nav className={ styles.menu }>
                <Logo />
            </nav>
            <Header />
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
                
            </section>
        </main>
    )
}