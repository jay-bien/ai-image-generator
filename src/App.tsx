import { useState } from 'react';

import{ BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import { CreatePost, Home } from './pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <header ></header>
        <Link to="/">
          <div className='logo'></div>
        </Link>
        <Link to="/create-post">Create A New Post</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
