import "./styles.css";

const SearchButton = () => {
  return (
    <div className="input-group">
      <input
        type="search"
        placeholder="Digite sua busca"
        className="form-control"
      />
      <button type="button" className="btn btn-search">
        <h6>BUSCAR</h6>
      </button>
    </div>
  );
};

export default SearchButton;