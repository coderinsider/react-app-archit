import React from 'react';
import { Link as WebLink, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Article } from './pages/Article';
const App = () => {
   return (
      <>
         <h1>Server Side rendering (SSR)</h1>
         <ul>
            <li>
               <WebLink to="/" >Home</WebLink>
            </li>
            <li>
               <WebLink to="/about" >About</WebLink>
            </li>
            <li>
               <WebLink to="/article" >Article</WebLink>
            </li>
         </ul>

         <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/article" element={<Article />} />
         </Routes>
      </>
   );
};
export default App;
