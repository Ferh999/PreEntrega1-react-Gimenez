import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const ItemList = ({ items }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            width: "100%",
            height: "70vh",

        }}>
            {
                items.map((element) => {
                    return <ProductCard element={element} key={element.id}/>
                })
            };
        </div>

    );
};

export default ItemList
