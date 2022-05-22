
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home';
import Navbar from './Pages/HomePage/Navbar';
import Purchase from './Pages/PurchasePage/Purchase';
import Login from './Pages/SignupPage/Login';
import RequireAuth from './Pages/SignupPage/RequireAuth';
import Signup from './Pages/SignupPage/Signup';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>


      </Routes>

    </div>
  );
}

export default App;
