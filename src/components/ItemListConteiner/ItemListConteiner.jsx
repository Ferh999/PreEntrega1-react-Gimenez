import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";



const ItemListConteiner = () => {

    const [items , setItems] = useState([])
    
    useEffect (()=>{
        const task = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve(products)
            }, 1000);
            
            // reject("error 404");
        });

        task
            .then((res)=> {
                setItems(res);
            })
            .catch((error) => {
                console.log("aca se rechazo", error)
            })
    }, [])

        console.log(items)
    return (
    <>
        <ItemList items={items}/>
        
    </>
    )
}

export default ItemListConteiner