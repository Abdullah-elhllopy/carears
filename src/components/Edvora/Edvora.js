/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Edvora.css'
import Product from './product/Product'
const Edvora = ({products ,product ,state ,city}) => {
  
  
  return (
    
    <div className=' col-md-9 col-12  edvora'>
        <h2 className='edvora-title '>Edvora</h2>
        <h4 className='edvora-products'> Products</h4>
       {
          products.map(item =>(
            <Product item={item} product={product} city={city} state={state} />

         ))
       }

       

  

    </div>
  )
}

export default Edvora