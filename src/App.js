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
import Dashboard from "./Components/Dashboard";
import EventsList from "./Components/EventsList";
import { UserWidgets } from "./Components/UserWidgets";
import { AdminWidgets } from "./Components/AdminWidgets";
import EventBooking from "./Components/EventBooking";
import CompletedEvents from "./Components/CompletedEvents";
import PendingEvents from "./Components/PendingEvents";
import CanceledEvents from "./Components/CanceledEvents";
const App = () => {
  const [auth, setAuth] = useState(true);
  const [role, setRole] = useState("");
  const [userdata, setUserData] = useState({});
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route
          path="/login"
          element={
            <Login
              setAuth={setAuth}
              setRole={setRole}
              setUserData={setUserData}
            />
          }
        />
        <Route path="/register" element={<Register />} />

        {auth && role === "admin" && (
          <Route
            path="/dashboard"
            element={
              <Dashboard role={role} setAuth={setAuth} userdata={userdata} />
            }
          >
            <Route index element={<AdminWidgets />} />
            <Route
              path="events-list"
              element={<EventsList userdata={userdata} />}
            />
            <Route
              path="event-booking"
              element={<EventBooking userdata={userdata} />}
            />
            <Route
              path="completed-events"
              element={<CompletedEvents userdata={userdata} />}
            />
            <Route
              path="pending-events"
              element={<PendingEvents userdata={userdata} />}
            />
            <Route
              path="canceled-events"
              element={<CanceledEvents userdata={userdata} />}
            />
          </Route>
        )}
        {auth && role === "user" && (
          <Route
            path="/dashboard"
            element={
              <Dashboard role={role} setAuth={setAuth} userdata={userdata} />
            }
          >
            <Route index element={<UserWidgets />} />
            <Route
              path="events-list"
              element={<EventsList userdata={userdata} />}
            />
            <Route
              path="event-booking"
              element={<EventBooking userdata={userdata} />}
            />
            <Route
              path="completed-events"
              element={<CompletedEvents userdata={userdata} />}
            />
            <Route
              path="pending-events"
              element={<PendingEvents userdata={userdata} />}
            />
            <Route
              path="canceled-events"
              element={<CanceledEvents userdata={userdata} />}
            />
          </Route>
        )}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
