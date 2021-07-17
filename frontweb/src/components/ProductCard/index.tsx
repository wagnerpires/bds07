import './styles.css';
import CarImg from 'assets/images/car-card.png';

const ProductCard = () => {
  return (
    <><div className="car-card">
        <div className="card-top">
          <img src={CarImg} alt="nome do produto" />
        </div>
        <div className="car-bottom">
          <h6>Audi Supra TT</h6>
          <p>
            <i>
              Completando 20 anos em 2018, o Audi TT com certeza marcou toda uma geração, que um dia sonhou em ter o pequeno Audi na garagem.
              Se na sua primeira geração ele parecia ser de brinquedo, ou uma versão diferente do Volkswagen New Beetle, hoje ele traz consigo ares mais dinâmicos e masculinos. Agressividade no olhar de quem já está na maior idade.
            </i>
          </p>
          <button>
            <h6>COMPRAR</h6>
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;