import itens from '../../Data/itens.json';
import styles from './style.module.scss';

export function Inicio() {
  let pratosRecomendaddos = [...itens];
  pratosRecomendaddos = pratosRecomendaddos.sort(() =>  0.5 - Math.random()).slice(0, 3);
  return (
    <section>
      <h3 className={styles.titulo}>
          Recomendações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendaddos.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver Mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}