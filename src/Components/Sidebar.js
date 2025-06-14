import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div>
        <h1>Sidebar</h1>
        <Link to="eventslist">Events List</Link>
         <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}
