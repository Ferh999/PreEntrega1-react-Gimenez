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
            backgroundColor: "grey",

        }}>
            {
                items.map((element) => {
                    return <ProductCard element={element}/>
                })
            };
        </div>

    );
};

export default ItemList