import CreateRoom from "./pages/CreateRoom"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Message from "../src/pages/Message"

const App = () => {
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<CreateRoom/>}/>
    <Route path="/chat" element={<Message/>}/>
  </Routes>
  </BrowserRouter>
 )
}

export default App