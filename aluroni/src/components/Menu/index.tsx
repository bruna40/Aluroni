import styles from './style.module.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className={ styles.menu }>
        <Logo />
        <div className={styles.menu__list}>
          <Link to='/' className={styles.menu__link}>Inicio</Link>
          <Link to='/cardapio' className={styles.menu__link}>Cardápio</Link>
          <Link to='sobre' className={styles.menu__link}>Sobre</Link>
        </div>
      </nav>
    </div>
  );
}