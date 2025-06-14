import React, { useState } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Services from "./pages/Services";
import Gallary from "./pages/Gallary";
import { Dashboard } from "./Components/Dashboard";
import { EventsList } from "./Components/EventsList";
import { UserWidgets } from "./Components/UserWidgets";

const App = () => {
  const [auth, setAuth] = useState(true);
  const [role, setRole] = useState("Admin");
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

        {auth && role === "Admin" && (
          <Route path="/dashboard" element={<Dashboard role={role} />}>
            <Route index element={<UserWidgets />} />
            <Route path="eventslist" element={<EventsList />} />
          </Route>
        )}
        {auth && role === "User" && (
          <Route path="/dashboard" element={<Dashboard role={role} />}>
            <Route index element={<UserWidgets />} />
            <Route path="eventslist" element={<EventsList />} />
          </Route>
        )}
      </Routes>
    </main>
  );
};

export default App;
