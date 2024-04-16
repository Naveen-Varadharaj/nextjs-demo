'use client'
import React, { useState } from 'react'

export default function page() {

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [message,setMessage]=useState();

  const handleClick=(e)=>{
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
  }
  return (
    <div className='flex-col w-fit mx-auto px-5 py-5 mt-10 bg-slate-500 rounded-lg text-black'>
    <h1 className='w-fit mx-auto font-bold'>Contact Us</h1>
    <form  className='flex-col w-full '>
      <div className='my-2'>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className='w-full outline-none py-2 px-2 rounded'
          onChange={(e)=>{setName(e.target.value)}}
          value={name}
        />
      </div>
      <div className='my-2'>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className='w-full outline-none py-2 px-2 rounded'
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
        />
      </div>
     
      <div className='my-2'>
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          id="message"
          name="message"
          className='w-full outline-none py-2 px-2 rounded'
          onChange={(e)=>{setMessage(e.target.value)}}
          value={message}
          
        ></textarea>
      </div>

      <div className='mx-auto   bg-orange-400 rounded-lg w-fit py-1 px-3'><button type="submit" onClick={(e)=>{handleClick(e)}}>Submit</button></div>
    </form>
  </div>
  )
}
