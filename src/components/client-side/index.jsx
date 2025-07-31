'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const ClientSide = () => {
    const [value,setValue]= useState (false);
    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/products').then((data)=>{
            setValue(data.data);
        })
        .catch(error=>{console.log('error')})

    },[]);
    return (
        <div>
          client: {value==false ? <p> loading</p> : <p>  {value[0].title} </p>}
        </div>
    );
}

export default ClientSide;