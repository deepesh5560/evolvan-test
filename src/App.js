import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/productCard";
import Navbar from "./components/navbar";
import { getAllProducts } from "./services/productServices";
import Loading from "./components/Loading";

function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProductList = async () => {
    setIsLoading(true);
    try {
      let data = await getAllProducts();
      setProductList(data.data?.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.error(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="App">
      {isLoading && <Loading />}

      <div>
        <Navbar
          getAllProducts={getProductList}
          setProductList={setProductList}
          setIsLoading={setIsLoading}
        />
      </div>
      <div className="row gy-5">
        {productList &&
          productList.map((product) => {
            return (
              <div
                key={product.id}
                className="col-12  col-sm-6 col-md-4  col-xl-4 col-xxl-3"
              >
                <Card data={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
