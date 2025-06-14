import React from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Routes, Route, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Services from "./pages/Services";
import Gallary from "./pages/Gallary";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default App;
