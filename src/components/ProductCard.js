import React from "react";
import { BiListPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {

  let productStock;

  if (product.status === true) {
    productStock = <button className='btn btn-sm btn-primary text-xs capitalize text-white rounded-full'>In Stock</button>
  } else {
    productStock = <p className='btn btn-sm btn-error text-xs capitalize text-white rounded-full'>Out Of Stock</p>
  }


  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
      key={ product._id }
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={ product.image } alt={ product.model } />
      </div>
      <div className='absolute z-10 top-1 left-1'>
        { productStock }
      </div>
      <h1 className='font-bold text-center'>{ product.model }</h1>
      <p className='text-center font-semibold mb-3'>Rating: { product.rating }</p>

      <div className=' flex-1'>
        <ul className='space-y-2'>
          { product.keyFeature.map((feature, idx) => {
            return <li key={ idx } className='text-sm '>{ feature }</li>;
          }) }
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
