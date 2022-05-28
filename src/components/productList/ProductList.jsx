import React from 'react'
import { Product } from '../product/Product';
import './productList.css';
export const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className='pl-title'>Create & inspire.</h1>
            <p className='pl-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis officia enim. </p>
        </div>
        <div className="pl-list">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}
 