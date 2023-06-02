import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
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
import LessonMain from './components/LessonMain';
import LeassonPhrases from './components/LessonPhrases';
import LessonWordtoWord from './components/LessonWordtoWord';
import GrammarStructures from './components/GrammarStructures';
import VerbTenses from './components/VerbTenses';
import './input.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeassonSideBySide from './components/LessonSidebySide';
import { ContextLessons, MyContextValues, User, Word} from './contexts/ContextLessons';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWithProvider = () => {
   const [user, setUser] = useState<User | undefined>(); 
  const [currentlyWords, setCurrentlyWords] = useState<Word[]>([]);
  
  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/users/1');
    let user = response.data
    const hasValue = user.currentlyWords.some((innerArray: number[]) => innerArray[1] >= 20) 
    if(hasValue) {
  // Taking the new Learn Word
  const learnWord = user.currentlyWords.filter((innerArray: number[]) => innerArray[1] >= 20)
  user.wordsLearned.push(...learnWord)
  
  // Taking the new currentlyWords
  const newArray = user.currentlyWords.filter((innerArray: number[]) => innerArray[1] < 20)
  
  // generates a new word to learn
  const generateNewWord = () => {
  function containAllWords(arrays: number[][], number: number): boolean {
  const flattenedArray = arrays.map(arr => arr[0]);
  const set = new Set(flattenedArray);
  
  for (let i = 1; i <= number; i++) {
    if (!set.has(i)) {
      return false;
    }
  }
  
  return true;
  }
  
  let is100used = containAllWords(user.wordsLearned, 100)
  let is1000used = containAllWords(user.wordsLearned, 1000)
  let randomNumber = Math.floor(Math.random() * 100) + 1; 
  let isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
  let isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)  
  
  // All Varibles below
  // First if the learnWord is below 100 (The phrases is only from the 100 words, so it will returns another index below 100)
  // Second if the learnWord is below 100 and all the first 100 words were already learn it will generates > 100 index
  // Third if all the 1000 words were learn then it'll console.log a message for now
  // Fourth if the words it's up to 100 and still has words remaining it'll generate a wordIndex above 100
  if(learnWord[0][0] <= 100 && !is100used) {
  while (isWordLearned || isWordLearning) {             
  randomNumber = Math.floor(Math.random() * 100) + 1; 
  isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
  isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
  }   
  return [randomNumber, 0]
  } else if (learnWord[0][0] <= 100 && is100used) {
  while (isWordLearned || isWordLearning || randomNumber <= 100) {             
  randomNumber = Math.floor(Math.random() * 1000) + 1; 
  isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
  isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
  } 
  return [randomNumber, 0]
  } else if(is1000used) {
  console.log('You finish all the words')
  } else {
  while (isWordLearned || isWordLearning || randomNumber <= 100) {           
    randomNumber = Math.floor(Math.random() * 1000) + 1; 
    isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
    isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber) 
    }   
    return [randomNumber, 0]
  }
  }
  
  // Push new Word to the newArray
  const newWord = generateNewWord() 
  newArray.push(newWord)
  
  // Put the new User on the database
      const newUser = {id: user.id, name:user.name, wordsLearned:user.wordsLearned, currentlyWords:newArray} 
      const response = await axios.put(`http://localhost:3000/users/${user.id}`, newUser);
      user = response.data
    }
  
    // Fetching user currently words 
    const wordPromises = user.currentlyWords.map(async (wordId: number[]) => {
        const response = await axios.get(`http://localhost:3000/words/${wordId[0]}`);
        return response.data;
      });
      const words = await Promise.all(wordPromises); //Await every req and put on a array
  
      setUser(user)
      setCurrentlyWords(words); // Set the Currently Words 
  }; 

  return (
    
      <BrowserRouter>
        <NavBar/>
        <ContextLessons.Provider value={{ user, currentlyWords, fetchData } as MyContextValues}>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/grammar" element={<GrammarPage/>} />
          <Route path="/grammar/:structure" element={<GrammarStructures/>} />
          <Route path="/grammar/:verbtime" element={<VerbTenses/>} />
          <Route path="/lessons" element={<LessonsPage/>} />
          <Route path="/dailylesson" element={<LessonMain/>} />
          <Route path="/phraseslesson/:order" element={<LeassonPhrases/>} />
          <Route path="/sizetosizelesson" element={<LeassonSideBySide/>} />
          <Route path="/wordtowordlesson/:order" element={<LessonWordtoWord/>} />
          <Route path="/dictionary" element={<DictionaryPage/>} />
          <Route path="/material" element={<MaterialPage/>} />
          <Route path="/textmaterial" element={<TextMaterialPage/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/addmaterial" element={<AddMaterialPage/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/posts/post/:postId" element={<Post/>} />
          <Route path="/videos/video/:videoId" element={<Video/>} />
        </Routes>
        </ContextLessons.Provider>
      </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <AppWithProvider />
  </React.StrictMode>
);

