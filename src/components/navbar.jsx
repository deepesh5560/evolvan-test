import React, { useState } from "react";
import { searchProducts } from "../services/productServices";

const Navbar = ({ setProductList, getAllProducts, setIsLoading }) => {
  const [srcVal, setSrcVal] = useState("");
  const getSearchList = async (search) => {
    setIsLoading(true);

    try {
      let data = await searchProducts(search);
      setProductList(data.data?.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };
  const handleSearch = () => {
    getSearchList(srcVal);
  };
  const handleChange = (value) => {
    setSrcVal(value);
    if (value.length > 2) {
      getSearchList(value);
    } else if (value.length === 0) {
      getAllProducts();
    }
  };
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand" style={{ color: "#fbb72c" }}>
            <h2> Products</h2>
          </span>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleChange(e.target.value)}
            />
            <button
              class="btn btn-outline-success"
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
