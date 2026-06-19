
import { IoMdSend } from "react-icons/io";
import {useState,useEffect,useRef} from 'react';

const Message = () => {
   const[text,setText]=useState("");
  const [Message, setMessage] = useState(["hi there","deepak"])
  // @ts-ignore
  const wsRef=useRef();
  useEffect(() => {
   const ws=new WebSocket('ws://localhost:8080')
   ws.onmessage=(event)=>{
      setMessage(m=>[...m,event.data]);
   }
   wsRef.current=ws;
   ws.onopen=()=>{
    ws.send(JSON.stringify({
      type:"Join",
      payload:{
        roomId:"123",
        name:"rahul"
      }
    }))
   }
   return ()=>{
    ws.close();
   }
  }, [])
  
  return (
   <div className='text-white h-screen bg-black '>
    <div>h11lo</div>
    <div className='h-[89vh] '>
      {Message.map(message=><div className="m-8"><span className="bg-white  text-black p-4 rounded">{message}</span></div>)}
    </div>
    <div className='font-white w-full flex bg-white'>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='type a message' className='text-black border-none hover:border-none flex-1 p-4'></input>
      <button onClick={()=>{
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
    }className=' bg-green-600 p-4 cursor-pointer'><IoMdSend size={32}/></button>
      </div>
   </div>
  )
}

export default Message