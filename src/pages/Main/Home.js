import React, { useEffect, useState } from "react";
import ProductCard from './../../components/ProductCard';
import { useDispatch } from 'react-redux';
import { toggleBrand, toggleStock } from './../../redux/actions/filterActions';
import { useSelector } from 'react-redux';


const Home = () => {
  const [products, setProducts] = useState([]);
  const filters = useSelector(state => state.filter.filters)
  const { brands, stock } = filters;




  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  // Dispatch function
  const dispatch = useDispatch();


  // active class
  const activeClass = 'text-white bg-primary border-white'


  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={ () => dispatch(toggleStock()) }
          className={ `border px-3 py-2 rounded-full font-semibold ${ stock ? activeClass : null }` }
        >In Stock</button>
        <button
          onClick={ () => dispatch(toggleBrand("amd")) }
          className={ `border px-3 py-2 rounded-full font-semibold ${ brands.includes("amd") ? activeClass : null }` }
        >AMD</button>
        <button
          className={ `border px-3 py-2 rounded-full font-semibold ${ brands.includes("intel") ? activeClass : null }` }
          onClick={ () => dispatch(toggleBrand("intel")) }
        >Intel</button>
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
