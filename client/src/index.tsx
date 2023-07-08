import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './components/NavBar'
import GrammarPage from './pages/grammar/GrammarPage'
import LessonsPage from './pages/lessons/LessonsPage'
import DictionaryPage from './pages/DictionaryPage'
import MaterialPage from './pages/material/MaterialPage'
import AddMaterialPage from './pages/material/AddMaterialPage'
import Post from './components/Post'
import Posts from './components/Posts'
import Videos from './components/Videos'; 
import Video from './components/Video';
import LessonMain from './pages/lessons/LessonMain';
import LeassonPhrases from './pages/lessons/LessonPhrases';
import LessonWordtoWord from './pages/lessons/LessonWordtoWord';
import GrammarStructures from './pages/grammar/GrammarStructures';
import VerbTenses from './pages/grammar/VerbTenses';
import './input.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeassonSideBySide from './pages/lessons/LessonSidebySide';
import { MyContextProvider} from './contexts/ContextLessons';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
          <BrowserRouter>
        <NavBar/>
        <MyContextProvider>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/grammar" element={<GrammarPage/>} />
          <Route path="/grammar/structure/:structure" element={<GrammarStructures/>} />
          <Route path="/grammar/:verbtime" element={<VerbTenses/>} />
          <Route path="/lessons" element={<LessonsPage/>} />
          <Route path="/dailylesson" element={<LessonMain/>} />
          <Route path="/phraseslesson/:order" element={<LeassonPhrases/>} />
          <Route path="/sizetosizelesson" element={<LeassonSideBySide/>} />
          <Route path="/wordtowordlesson/:order" element={<LessonWordtoWord/>} />
          <Route path="/dictionary" element={<DictionaryPage/>} />
          <Route path="/material" element={<MaterialPage/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/addmaterial" element={<AddMaterialPage/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/posts/post/:postId" element={<Post/>} />
          <Route path="/videos/video/:videoId" element={<Video/>} />
        </Routes>
        </MyContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);

