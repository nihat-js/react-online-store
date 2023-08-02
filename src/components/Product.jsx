import React from 'react'
import "./Product.css"

export default function Product({data : { name,price,imagePath,sku,color }}) {
  return (
    <div className="card">
      <img src={imagePath} alt="Product image" />
      <h2> Name {name}</h2>
      <p>Price: $${price} </p>
      <p>Color: {color}</p>
      <p>SKU code: 123456</p>
    </div>
  )

}
