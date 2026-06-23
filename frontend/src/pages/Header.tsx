import React from 'react'
import dp from '../assets/dp.png'
interface headerData{
  name:string,
  RoomId:string
}
const Header = ({name,RoomId}:headerData) => {
  return (
    <>
    <div className='border-1 p-4 text-3xl font-bold border-black fixed top-0 flex  justify-between w-screen text-black pt-4'>
      <div><img src={dp} alt="" width={50} height={50} className='inline pr-2' /> {name}</div>
      <div>RoomId : {RoomId}</div>
    </div>
    </>
  )
}

export default Header