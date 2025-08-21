import { Routes, Route } from "react-router-dom";

import Account from "./components/Account";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  )
}

export default App
