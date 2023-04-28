import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './components/NavBar'
import GrammarPage from './pages/GrammarPage'
import LessonsPage from './pages/LessonsPage'
import DictionaryPage from './pages/DictionaryPage'
import MaterialPage from './pages/MaterialPage'
import TextMaterialPage from './pages/TextMaterialPage'
import AddMaterialPage from './pages/AddMaterialPage'
import Post from './components/Post'
import Posts from './components/Posts'
import Videos from './components/Videos';
import Video from './components/Video';
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
        <Route path="/textmaterial" element={<TextMaterialPage/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/addmaterial" element={<AddMaterialPage/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/posts/post/:postId" element={<Post/>} />
        <Route path="/videos/video/:videoId" element={<Video/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
