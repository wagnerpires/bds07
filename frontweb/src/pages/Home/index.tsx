import { ReactComponent as CarImg } from "assets/images/car-home.svg";
import { Link } from "react-router-dom";
import ButtonCatalog from "components/ButtonCatalog";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card-upper">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <CarImg />
        </div>
      </div>
      <div className="base-card home-card-bottom">
        <Link to="/products">
          <ButtonCatalog/>
        </Link>
      </div>
    </div>
  );
};

export default Home;