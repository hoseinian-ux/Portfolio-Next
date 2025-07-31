'use client'

import axios from "axios";
import { useEffect, useState } from "react";

 
const AsideComponent = () => {
    const [data,setdata]= useState(false);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then(data=>{
            console.log(data);
            setdata (data.data.products);
        }).catch(error => console.log('error'))
    },[])
    return (
        <div className="min-w-[10rem] bg-gray-200 rounded-3xl flex-col m-10 p-5">
            {
                data==false? <div> Loading...</div>:data.map ((item,index)=>
                    <p key={index}> {item.title}</p>
                )
            }
        </div>
    );
}

export default AsideComponent;