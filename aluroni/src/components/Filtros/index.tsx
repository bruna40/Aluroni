import styles from './style.module.scss';
import filtros from '../../utils/filtros.json';
import { IFiltro } from '../../@types/Filtro';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

export function Filtros({ filter, setFilter }: IFiltro ) {

    function selecionaFiltros(filtros: IOpcao) {
        if(filter === filtros.id) {
            return setFilter(null);
        }
        setFilter(filtros.id);
    }
    return (
        <div className={styles.filtros} >
            {filtros.map((opcao) => (
                <button
                    className={classNames({[styles.filtros__filtro]: true, [styles['filtros__filtro--ativo']] : filter === opcao.id})}
                    key={opcao.id}
                    onClick={() => selecionaFiltros(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}