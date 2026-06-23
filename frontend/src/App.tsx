import CreateRoom from "./pages/CreateRoom"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Message from "../src/pages/Message"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

const App = () => {
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/CreateRoom" element={<CreateRoom/>}/>
    <Route path="/chat" element={<Message/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
  </Routes>
  </BrowserRouter>
 )
}

export default App