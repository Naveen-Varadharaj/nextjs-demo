import React from 'react'
import Image from 'next/image';

import Link from 'next/link';
async function fetchdata(){
    const res= await fetch("https://dummyjson.com/products");
    return res.json();
}

async function List() {
    let data=await fetchdata();
    //console.log(data)
    
  return (

    <div className='my-10'>
      <h1 className='w-fit mx-auto px-2 py-1 text-2xl font-bold text-cyan-800'>Product Lists</h1>
      <div className='flex flex-wrap justify-center '>
       {data.products.map((item)=>{
                return(
              
                <Link key={item.id} className=' bg-slate-500 rounded mt-2 mx-2 border border-zinc-950 w-1/4 text-black flex justify-center h-20 items-center hover:bg-red-400' href={`list/${item.id}`}>
                    
                   
                  <div className='p-2 flex'>
                 
                    <h2 className='text-lg font-semibold truncate'>
                      {item.title}
                    </h2>
                   
                  </div>
                </Link>
          
              
              )
            })}

</div>
         
    </div>
  )
}

export default List