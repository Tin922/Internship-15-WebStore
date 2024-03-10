import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchInput}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}></form>
      <label htmlFor="search">Upisite proizvod</label>
      <input
        type="text"
        id="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Pretraži</button>
    </>
  );
};

export default Navigation;
