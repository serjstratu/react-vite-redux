import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

const App= () =>{

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
              </Route>
          </Routes>
      </Router>
  )
}

export default App
