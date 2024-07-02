// import Home from "./pages/Home";
// import {Link} from 'react-router-dom';
// import AboutUs from "./components/About-us/AboutUs";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import ChooseUs from "./components/Choose-us/ChooseUs";


// function App() {
//   return (
//     <div className="App">
//      { <BrowserRouter>
//       <ul>
//         <li><link to='/'>AboutUs</link></li>
//       </ul>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/About-us" element={<AboutUs/>}/>
//         <Route path="/Choose-us" element={<ChooseUs/>}/>
//         </Routes>

//       </BrowserRouter>
//       </div>
// }
//   );

import {Routers, Route} from 'react-router-dom'
//import { Navbar } from 'reactstrap'
import AboutUs from './components/About-us/AboutUs'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChooseUs from './components/Choose-us/ChooseUs';

function App() {
  return(
    
    <div className="App">
     { <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<AboutUs/>}/>
      <Route path='/' element={<ChooseUs/>}/>
    </Routes>
    </BrowserRouter>
    </div>}
     

  )
}



    





