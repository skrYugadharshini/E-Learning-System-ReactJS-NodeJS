import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";


const App =() =>
  return (
    <>
    <div className='app'>
      <header/>
      <Routes>
        <Route path='/' element={<Home/>}
      </Routes>
    </div>
    </>
  )
function App() {
  return <Home />;
}

export default App;
