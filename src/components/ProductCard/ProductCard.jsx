import { Link } from 'react-router-dom'
import React from 'react'
import "./ProductCard.css"

const ProductCard = ({element}) => {
    return (
        <>
        <Link to={`/itemDetail/${element.id}`}>
        <div className='productCard'>
            <h2>{element.title}</h2>
            <h3>{element.price}</h3>
            <img src={element.img} alt="" />
        </div>
        </Link>
        
        </>
        
        
    )
}

export default ProductCard