import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './components/NavBar'
import GrammarPage from './pages/GrammarPage'
import LessonsPage from './pages/LessonsPage'
import DictionaryPage from './pages/DictionaryPage'
import MaterialPage from './pages/MaterialPage'
import './input.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
         <BrowserRouter>
<NavBar/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/grammar" element={<GrammarPage/>} />
        <Route path="/lessons" element={<LessonsPage/>} />
        <Route path="/dictionary" element={<DictionaryPage/>} />
        <Route path="/material" element={<MaterialPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
