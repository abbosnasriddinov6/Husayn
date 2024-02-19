import axios from "axios";
import { create } from "zustand";


export const newproducts=create((set)=>({
    loading:false,
    products2:[],
    error:null,
     postnew:async(newe)=>{
        set(()=>({
            loading:true
        }))
        try {
            console.log(newe);
            const res=await axios.post('http://localhost:3000/products2',newe)
        } catch (error) {
            error.message
            loading:false
        }
       
     },



     getnew:async()=>{
        set(()=>({
            loading:true
        }))
        try {
            const res=await axios.get('http://localhost:3000/products2')
            const data= await res.data
            set(()=>({
                products2:data,
                loading:false

            }))
        } catch (error) {
            error.message
            loading:false
        }
       
     }





    



     
}))