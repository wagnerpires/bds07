import './styles.css';

import { Link } from 'react-router-dom';
import ButtonBuy from 'components/ButtonBuy';
import ProductImg from 'assets/images/product.svg';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT </h6>
            </div>
            <div className="card-bottom-container-d">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
            </div>
            <div>
            <Link to="/products" className="home-button">
            <ButtonBuy />
          </Link>
          </div>

        </div>
    );
}

export default ProductCard;