import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Products from "./Components/Products";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />}></Route>
          <Route path="/men" element={<Products />}></Route>
          <Route path="/women" element={<Products />}></Route>
          <Route path="/kids" element={<Products />}></Route>
          <Route path="/:product" element={<Products />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
