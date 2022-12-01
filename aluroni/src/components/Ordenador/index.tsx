import { useState } from 'react';
import styles from './style.module.scss';
import opcoes from '../../utils/opcoes.json';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import {IOrdenador} from '../../@types/Ordenador';

export function Ordenador({order, setOrder}: IOrdenador) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = order && opcoes.find((opcao) => opcao.value === order)?.nome;
    return (
        <button 
            className={classNames({[styles.ordenador]:true,[styles['ordenador--ativo']]: order !== '',})}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || "Ordenar Por:"}</span>

            {aberto ?  <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20} />}
            <div className={
                classNames({[styles.ordenador__options]:
                    true,[styles["ordenador__options--ativo"]]:
                    aberto,
                })} >
                {opcoes.map((opcao) => (
                    <div 
                        className={styles.ordenador__option}
                        key={opcao.value}
                        onClick={() => setOrder(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}

