import axios from "axios";
import { create } from "zustand";


export const useproducts=create((set)=>({
    loading:false,
    products:[],
    error:null,

     getproducts:async()=>{
        set(()=>({
            loading:true
        }))
        try {
            const res=await axios.get('http://localhost:3000/Products')
            const data= await res.data
            set(()=>({
                products:data,
                loading:false

            }))
        } catch (error) {
            error.message
            loading:false
        }
       
     }










     
}))