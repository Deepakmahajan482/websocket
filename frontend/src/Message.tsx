
import { IoMdSend } from "react-icons/io";
import {useState,useEffect,useRef} from 'react';
import { Navigate, useLocation } from "react-router-dom";

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

    setText("");
  }
  return (
   <div className='text-white h-screen bg-black flex flex-col p-10'>
    <div className="flex justify-between p-6">
    <div className="p-2 bg-gray-400 rounded-full"> User: {name}</div> <div className="p-2 bg-gray-400 rounded-full">  Room: {room}</div>
    </div>
    <div className='flex-1 overflow-y-auto px-4 py-2'>
      {Message.map(message=><div className="m-8"><span className="bg-white  text-black p-4 rounded">{message}</span></div>)}
    </div>
    <div className='font-white w-full flex bg-white rounded-full' >
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