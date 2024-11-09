import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Product = () => {
    let[searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);

    const updateSearchParams =(newParams) =>{
        const paramsObject = Object.fromEntries(searchParams.entries());

        const mergedParams = {...paramsObject,...newParams};
        setSearchParams(mergedParams);
    }


  return (
    <div>
        <h4>Colors</h4>
        {/* <button onClick={()=>setSearchParams({color: "red"})}>red</button> */}
        <button onClick={()=>updateSearchParams({color:"red"})}>red</button>
        <button onClick={()=>updateSearchParams({color: "white"})}>white</button>

        <h4>size</h4>
        <button onClick={()=>updateSearchParams({size:10})}>10</button>
        <button onClick={()=>updateSearchParams({size:11})}>11</button>
        <button onClick={()=>updateSearchParams({size:12})}>12</button>
    </div>
  )
}

export default Product