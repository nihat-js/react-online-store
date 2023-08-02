import React from 'react'
import Product from './Product'
import "./Products.css"
export default function Products({products,favorites}) {
  return (
    <div className='products-component'> 
      {products.map((el,i)=>  <Product  key={i}  data={el}  />  )}
    </div>
  )
}
