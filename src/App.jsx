import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Button from './pages/Button'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Button' element={<Button/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
