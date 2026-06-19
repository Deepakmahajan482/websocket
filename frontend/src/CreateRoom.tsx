import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const CreateRoom = () => {
  const navigate=useNavigate();
  function navigating(){
    if(name!="" && room!="")
    navigate("/chat",{state:{name,room}});
  }
const [name,setName]=useState("");
const[room,setRoom]=useState("");
const [id,setId]=useState("");
const[Generate,setGenerate]=useState(true);
  const roomId =Math.floor(100000 + Math.random() * 900000).toString()
  return (
    <div className='bg-gradient-to-b from-black to-purple-950  text-black h-screen grid place-items-center'>
      <form>
      <div className='border-gray-400 border-2 text-white p-6 sm:p-8 rounded-3xl gap-3 w-11/12 max-w-md grid'>
      <p className='text-2xl '>Join Room / Create Room</p>
        <label htmlFor='name' className='text-xl m-2'>Name
          <br />
      <input type="text"  className='border border-gray-400 p-2 text-white pl-4 w-full mt-2 rounded-full' id='name' placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>

      </label>
      <label htmlFor='room' className='text-xl m-2'>Join Room
        <br />
      <input className='border border-gray-400 p-2 pl-4 w-full mt-2 rounded-full'type="text" id='room' placeholder='Join the Room' value={room} onChange={(e)=>{setRoom(e.target.value)}} required/>
      </label>
      <button className='cursor-pointer text-xl p-4 m-5 text-black rounded-4xl   mt-4 bg-purple-300 text-500' onClick={()=>{navigating()}}>Click here to Join </button>
      {Generate ? <span>Create a room ? <span className='text-blue-500 cursor-pointer' onClick={()=>{setId(roomId);setGenerate(false);}}>Click here</span></span>:
      <p className='p-4 bg-red-500 text-xl rounded-2xl'>The Room  is  : {id}</p>}
      </div>
</form>
    </div>
  )
}

export default CreateRoom