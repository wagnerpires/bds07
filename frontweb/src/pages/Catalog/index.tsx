import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => (
  <div className="container my4">
    <div className="home-car-search">
        <input
          className="form-control"
          type="email"
          placeholder="Digite sua busca"
        />
      <div className="car-btn-search">
        <button type="submit" className="btn btn-success btn-search">
          <h6>BUSCAR</h6>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <ProductCard/>
      </div>
      <div className="col-sm-6 col-lg-4">
        <ProductCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <ProductCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <ProductCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <ProductCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <ProductCard />
      </div>
    </div>
  </div>
);
export default Catalog;