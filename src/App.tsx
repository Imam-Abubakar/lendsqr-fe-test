import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import UserProfile from "./pages/users";
import Error from "./pages/error";
import './styles/index.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard/users" element={<Dashboard />} />
      <Route path="dashboard/users/:id" element={<UserProfile  />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
