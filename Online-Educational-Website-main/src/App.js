import { Card, Placeholder } from "reactstrap";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from './components/Cart/Cart'

const App =() =>
  return (
    <>
    <div className='app'>
      <header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Card/>}/>
        <Route path='/order' element={<Placeholder}/>
      </Routes>
    </div>
    </>
  )
function App() {
  return <Home />;
}

export default App;
