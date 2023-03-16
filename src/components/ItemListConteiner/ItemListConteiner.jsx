import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListConteiner.css"
import { MoonLoader } from "react-spinners";

const style = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    };

const ItemListConteiner = () => {

    const {categoryName}= useParams()
    console.log(categoryName)

    const [items , setItems] = useState([])
    
    useEffect (()=>{

        const productsFiltered = products.filter( (product)=> product.category === categoryName )

        const task = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve( categoryName ? productsFiltered : products)
            }, 1500);
            
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
    <div className="banner">
        {items.length < 1 ? (
            <MoonLoader
            color={"white"}
            cssOverride={style}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    ) : (
    <ItemList items={items}/>
    ) }
    </div>
    
        
    </>
    )
}

export default ItemListConteiner