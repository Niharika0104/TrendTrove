import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import Login from './Components/Login';
import Register from './Components/Register';
import Products from './Components/Products';
import HomePage from './Components/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import NotFound from './Components/NotFound';
import UserContextProvider from './Helper/UserContextProvider';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:5000'
axios.defaults.withCredentials = true;




function App() {
  
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>

     

      {/* Login Routes {user ? <Navigate replace to="/"/> }: */}
      <Route exact path="/" element={ <HomePage/>} ></Route>
      <Route exact path="/login" element={ <Login/>} />
      <Route path="/sign-up" element={<Register/>}></Route>
      <Route path="/:product" element={<Products/>}></Route>
</Routes>
</BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
