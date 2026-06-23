
import { IoMdSend } from "react-icons/io";
import {useState,useEffect,useRef} from 'react';
import { Navigate, useLocation } from "react-router-dom";
import Header from "../pages/Header";

const Message = () => {
   const location = useLocation();

  if (!location.state) {
    return <Navigate to="/" />;
  }

  const { name, room } = location.state;

 
   const[text,setText]=useState("");
  
  const [Message, setMessage] = useState<string[]>([])
  // @ts-ignore
  const wsRef=useRef();
  useEffect(() => {
   const ws=new WebSocket('https://websocket-knsx.onrender.com')
   ws.onmessage=(event)=>{
    //  @ts-ignore
      setMessage(m=>[...m,event.data]);
   }
   wsRef.current=ws;
   ws.onopen=()=>{
    ws.send(JSON.stringify({
      type:"Join",
      payload:{
        roomId:room,
        name:name
      }
    }))
   }
   return ()=>{
    ws.close();
   }
  }, [])
  
  function sendMessage(){
    if(text!=""){
          setMessage(m => [...m, `You : ${text}`]);
        // @ts-ignore
        wsRef.current?.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: text
        }
      })
    );
  }

    setText("");
  }
  return (
   <div className='text-white h-screen bg-[#ece5dd] flex flex-col'>
    <div className="flex justify-between ">
    {/* <div className="p-2 bg-black rounded-full"> User: {name}</div> <div className="p-2 bg-black rounded-full">  Room: {room}</div> */}
    <Header name={name} RoomId={room}/>
    </div>
    <div className='flex-1 overflow-y-auto overflow-x-hidden px-4 py-2 mt-20'>
      {Message.map((message,index)=>(message.split(':')[0] ==='You ')?(<div key={index} className="flex justify-end mb-3"><span className="bg-green-500 text-white p-3 rounded-lg max-w-[70%] break-words">{message.split(":")[1]}</span></div>):(<div key={index} className="flex justify-start mb-3"><span className="bg-green-500 text-white p-3 rounded-lg max-w-[70%] break-words">{message.split(":")[1]}</span></div>))}
    </div>
    <div className='font-white w-full flex bg-white rounded-full  mb-4' >
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='type a message' className='rounded-full text-black border-none hover:border-none flex-1 p-4'
       onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}>





  </input>
      <button onClick={()=>{
   sendMessage();
      }
    }className=' bg-green-600 p-4 cursor-pointer rounded-full'><IoMdSend size={32}/></button>
      </div>
   </div>
  )
}

export default Message