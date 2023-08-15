import ProductForm from "../components/ProductForm";
import DisplayProducts from "../components/DisplayProducts";
import { useState } from 'react'

const HomeView = () => {
  const [ products, setProducts ] = useState([])
  
  return (
    <>
      <div>
        <ProductForm products={products} setProducts={setProducts}/>
      </div>
        <DisplayProducts products={products} setProducts={setProducts} />
    </>
  );
}

export default HomeView