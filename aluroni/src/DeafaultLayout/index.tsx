import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Menu from '../components/Menu';
import stylesTema from '../styles/Tema.module.scss';
import '../index.css';


export function DefaultLayout() {
  return (
    <>
      <main className="container">
        <Menu />
        <Header />
        <div className={stylesTema.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}