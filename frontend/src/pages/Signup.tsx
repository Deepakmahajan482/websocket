import React from 'react'
import logo from '../assets/logo.png'
import {useState} from 'react'
const Signup = () =>{
  
  const [name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[Email,setEmail]=useState("");

    return (
      <div className='bg-gradient-to-b from-black to-purple-950  text-black h-screen grid place-items-center'>
        <form>
        <div className='border-gray-400 border-2 text-white p-6 sm:p-8 rounded-3xl gap-1 w-12/12 max-w-md grid'>
        <center><img src={logo} height={50} width={50} className='rounded-full'/></center>
        <p className='text-3xl font-extrabold'>Signup to  WeChat  </p>
          <label htmlFor='name' className='text-xl m-2'>Name
            <br />
        <input type="text"  className='border border-gray-400 p-2 text-white pl-4 w-full mt-2 rounded-full' id='name' placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
  
        </label>
          <label htmlFor='mail' className='text-xl m-2'>Email
            <br />
        <input type="text"  className='border border-gray-400 p-2 text-white pl-4 w-full mt-2 rounded-full' id='mail' placeholder='Enter your Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} required/>
  
        </label>
        <label htmlFor='room' className='text-xl m-2'>Password
          <br />
        <input className='border border-gray-400 p-2 pl-4 w-full mt-2 rounded-full'type="password" id='room'  placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
        </label>
        <button className='cursor-pointer text-xl p-4 m-5 text-black rounded-4xl   mt-4 bg-purple-300 text-500' >Signup </button>
        <span>Already have the account ?<a href="/signin" className='text-blue-500 cursor-pointer' onClick={()=>{}}> Click here</a></span>
      </div>
  </form>
      </div>
    )
  
}

export default Signup