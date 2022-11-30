import { IBuscador} from '../../@types/Buscador';
import styles from './style.module.scss';
import { CgSearch } from 'react-icons/cg';

export function Buscador({ value, onChange }: IBuscador) {
    return (
        <div className={styles.buscador}>
            <input
                type="text"
                placeholder="Buscar"
                value={ value }
                onChange={ (e) => onChange(e.target.value) }
            />
            <CgSearch
                size={ 20 }
                color="#4C4D5E"
            />
        </div>
    )
}