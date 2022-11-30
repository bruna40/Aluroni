import styles from './style.module.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { Buscador } from '../../components/Buscador';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Filtros } from '../../components/Filtros';

export function Cardapio() {
    const [search, setSearch] = useState('');
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
                <Filtros />
            </section>
        </main>
    )
}