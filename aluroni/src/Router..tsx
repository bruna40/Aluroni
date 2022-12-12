import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { DefaultLayout } from './DeafaultLayout';
import { Cardapio } from './pages/Cardapio/index';
import { Inicio } from './pages/Inicio/index';
import { Sobre } from './pages/Sobre/index';
import { NotFound } from './pages/NotFound/index';
import { Pratos } from './pages/Pratos/index';

export function Router() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/sobre' element={<Sobre />} />
        </Route>
        <Route path='/pratos/:id' element={<Pratos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}