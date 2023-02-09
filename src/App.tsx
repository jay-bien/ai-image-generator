import { useState } from 'react';

import{ BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import { CreatePost, Home } from './pages';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="app">
      <BrowserRouter>
      <header >

      <nav>
      <Link to="/">
          <div className='logo'></div>
        </Link>
        
         
                    <ul>
                        <li>

                        </li>
                        <li>
                        <Link to="/create-post">Create A New Post</Link>
                        </li>
                    </ul>
     </nav>
      </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
