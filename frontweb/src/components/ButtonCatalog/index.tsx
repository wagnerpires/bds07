import "./styles.css";
import "bootstrap/js/src/collapse.js";

const ButtonCatalog = () => {
  return (
    <div className="btn-container">
      <div>
        <button className="btn btn-info">
          <h6>VER CATÁLOGO</h6>
        </button>
      </div>
      <div className="btn-content">
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default ButtonCatalog;