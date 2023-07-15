import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
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
import LeassonSideBySide from './pages/lessons/LessonSidebySide';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import VerbTenses from './pages/grammar/VerbTenses';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import { MyContextProvider} from './contexts/ContextLessons';
import PublicRoute from './components/PublicRoute'
import ProtectRoute from './components/ProtectRoute'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
 
function App() {
    return (
        <BrowserRouter>
        <MainApp/>
        </BrowserRouter>
    )
}
 
function MainApp() { 
    const location = useLocation();
    const excludeNavBarRoutes = ['/signup', '/login'];

  return (
    <>
    {excludeNavBarRoutes.includes(location.pathname) ? null : <NavBar />}
    <MyContextProvider>
    <Routes>
    <Route path="/" element={ <ProtectRoute><Home/></ProtectRoute>} />
    <Route path="/grammar" element={ <ProtectRoute><GrammarPage/></ProtectRoute>} />
    <Route path="/grammar/structure/:structure" element={ <ProtectRoute><GrammarStructures/></ProtectRoute>} />
    <Route path="/grammar/:verbtime" element={ <ProtectRoute><VerbTenses/></ProtectRoute>} />
    <Route path="/lessons" element={ <ProtectRoute><LessonsPage/></ProtectRoute>} />
    <Route path="/dailylesson" element={ <ProtectRoute><LessonMain/></ProtectRoute>} />
    <Route path="/phraseslesson/:order" element={ <ProtectRoute><LeassonPhrases/></ProtectRoute>} />
    <Route path="/sizetosizelesson" element={ <ProtectRoute><LeassonSideBySide/></ProtectRoute>} />
    <Route path="/wordtowordlesson/:order" element={ <ProtectRoute><LessonWordtoWord/></ProtectRoute>} />
    <Route path="/dictionary" element={ <ProtectRoute><DictionaryPage/></ProtectRoute>} />
    <Route path="/material" element={ <ProtectRoute><MaterialPage/></ProtectRoute>} />
    <Route path="/videos" element={ <ProtectRoute><Videos/></ProtectRoute>} />
    <Route path="/addmaterial" element={ <ProtectRoute><AddMaterialPage/></ProtectRoute>} />
    <Route path="/posts" element={ <ProtectRoute><Posts/></ProtectRoute>} />
    <Route path="/posts/post/:postId" element={<ProtectRoute><Post/></ProtectRoute>} />
    <Route path="/videos/video/:videoId" element={<ProtectRoute><Video/></ProtectRoute>} />
      <Route path="/signup" element={ <PublicRoute><SignUp /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />  
  </Routes>
  </MyContextProvider>
  <ToastContainer position="top-center"autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
  </>
  )
}

export default App