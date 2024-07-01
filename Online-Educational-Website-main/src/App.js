
import Home from "./pages/Home";
import { Form } from "reactstrap";
import AboutUs from "./components/About-us/AboutUs";
import Header from "./components/Header/Header";


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChooseUs from "./components/Choose-us/ChooseUs";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/About-us" element={<AboutUs/>}/>
        <Route path="/Choose-us" element={<ChooseUs/>}/>


      
      </Routes>

      </BrowserRouter>
    </div>
  );
  
        

}

export default App;
