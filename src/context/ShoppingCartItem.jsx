"use client"
import { createContext, useEffect, useState } from "react"



export const ShoppingCartItem = createContext({})


export function ShoppingCartItemProvider({children}){

    const [carts , setCarts] = useState([])

    const handelIncreaseProductQty = (id) =>{
        setCarts(currentItems =>{
            let ProductIsNot = currentItems.find(item => item.id == id) == null
            if(ProductIsNot){
                return [...currentItems , {id : id , qty : 1}]
            }else{
                return currentItems.map((item) => {
                    if(item.id == id){
                        return {id : item.id , qty : item.qty + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const handelDecreaseProductQty = (id) =>{
        setCarts(currentItems => {
            let ProductIsLastOne = currentItems.find((item) => item.id == id)?.qty == 1
            if(ProductIsLastOne){
                return currentItems.filter((item) => item.id != id)
            }else{
                return currentItems.map((item) =>{
                    if(item.id == id){
                        return   { id : item.id , qty : item.qty - 1} 
                    }else{
                        return item
                    }
                })
            }
        })
    }

    useEffect(() =>{
        const storeCarts = localStorage.getItem("carts")
        if(storeCarts){
          setCarts(JSON.parse(storeCarts))
        }
    } , [])

    useEffect(()=>{
        localStorage.setItem("carts" , JSON.stringify(carts))
    }, [carts])

    const TotalQty = carts.reduce((total , item)=>{
        return total + item.qty
    } , 0)

    const getNumber = (id)=>{
        return carts.find(item => item.id == id)?.qty || 0
    }

    return(
        <ShoppingCartItem.Provider value={{carts , handelIncreaseProductQty , handelDecreaseProductQty , getNumber , TotalQty}}>
           {children}
        </ShoppingCartItem.Provider>
    )
}