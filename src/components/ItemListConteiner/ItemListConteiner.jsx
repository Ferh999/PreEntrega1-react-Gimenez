import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";



const ItemListConteiner = () => {

    const {categoryName}= useParams()
    console.log(categoryName)

    const [items , setItems] = useState([])
    
    useEffect (()=>{

        const productsFiltered = products.filter( (product)=> product.category === categoryName )

        const task = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve( categoryName ? productsFiltered : products)
            }, 600);
            
            // reject("error 404");
        });

        task
            .then((res)=> {
                setItems(res);
            })
            .catch((error) => {
                console.log("aca se rechazo", error)
            })
    }, [categoryName])

        console.log(items)
    return (
    <>
        <ItemList items={items}/>
        
    </>
    )
}

export default ItemListConteiner