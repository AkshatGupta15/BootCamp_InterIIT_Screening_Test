import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Layout from './pages/Layout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout children={<Dashboard/>} />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
