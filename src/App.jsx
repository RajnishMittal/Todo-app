import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Login from './components/login.jsx'
import Todo from './components/Todo.jsx'
import './App.css'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/todo" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
