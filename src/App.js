import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom"; 
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from"./context/PlaygroundContext";
import Error404 from "./screens/Error404/Error404";
import Home from "./screens/Home/Home";
import Playground from "./screens/Playground/Playground";
import {GlobalStyle} from './screens/style/global'

function App() {
  return (
    <PlaygroundProvider>
    <ModalProvider>
   <BrowserRouter>
   <GlobalStyle/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/playground/:folderId/:playgroundId" element={<Playground/>}/>
    <Route path="/*" element={<Error404/>}/>
   </Routes>
   </BrowserRouter>
    </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
