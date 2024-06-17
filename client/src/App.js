import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Products from "./Components/Products";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WomanProduct from "./Components/WomanProduct";
import MenProduct from "./Components/MenProduct";
import KidsProduct from "./Components/KidsProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login Routes {user ? <Navigate replace to="/"/> }: */}
         
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/women" element={<WomanProduct />}></Route>
          <Route exact path="/men" element={<MenProduct />}></Route>
          <Route exact path="/kids" element={<KidsProduct />}></Route>
          <Route exact path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />}></Route>
          <Route path="/:product" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
