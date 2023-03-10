import React, { useEffect, useState } from "react";
import ProductCard from './../../components/ProductCard';


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])




  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button>In Stock</button>
        <button>AMD</button>
        <button>Intel</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {
          products.map((product, idx) => <ProductCard key={ idx } product={ product }></ProductCard>)
        }
      </div>
    </div>
  );
};

export default Home;
