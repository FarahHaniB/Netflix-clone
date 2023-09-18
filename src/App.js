import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Navbar />{" "}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
