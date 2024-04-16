import React from 'react'

async function fetchdata(id){
  const res= await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function page({params}) {
   const data= await fetchdata(params.id);
  return (
    
<div className='mt-10'>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-auto">
    
        <img className="rounded-t-lg" src={data.thumbnail} alt="" />
   
    <div className="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
       
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
        
    </div>
</div>
</div>

  )
}
