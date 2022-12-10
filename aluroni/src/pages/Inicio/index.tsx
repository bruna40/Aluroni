import itens from '../../Data/itens.json';
import styles from './style.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import nossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export function Inicio() {
  let pratosRecomendaddos = [...itens];
  pratosRecomendaddos = pratosRecomendaddos.sort(() =>  0.5 - Math.random()).slice(0, 3);
  
  const history = useNavigate();

  function redirectToPrato(prato: typeof itens[0]) {
    history(`/pratos/${prato.id}`, {  state: {prato}, replace: true } );
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>
          Recomendações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendaddos.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirectToPrato(item)}
            >
              Ver Mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.casa}>
        <img src={nossaCasa} alt='Casa do aluroni'/>
        <div className={styles.casa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}