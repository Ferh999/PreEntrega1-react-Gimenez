import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListConteiner.css"
import { MoonLoader } from "react-spinners";
import { db } from "../../firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"

const style = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    };

const ItemListConteiner = () => {

    const {categoryName}= useParams()


    const [items , setItems] = useState([])
    
    useEffect (()=>{

        const itemCollection = collection( db , "products" )

        if (categoryName) {
            
            const q = query( itemCollection, where("category", "==", categoryName))

            getDocs (q)
            .then( (res)=> {
                const products = res.docs.map( product => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
    
                setItems( products )
    
            })
            .catch((err)=> console.log("error: " + err))
        

        }else{
            getDocs (itemCollection)
            .then( (res)=> {
                const products = res.docs.map( product => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
    
                setItems( products )
    
            })
            .catch((err)=> console.log("error: " + err))
        }

    }, [categoryName])



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