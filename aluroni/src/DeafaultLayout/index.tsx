import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import Menu from '../components/Menu';
import stylesTema from '../styles/Tema.module.scss';


export function DefaultLayout() {
  return (
    <main>
      <Menu />
      <Header />
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </main>
  );
}