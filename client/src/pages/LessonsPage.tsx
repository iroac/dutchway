import { createApi } from 'unsplash-js';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function LessonsPage() {
  const [user, setUser] = useState<User | undefined>();
  const [currentlyWords, setCurrentlyWords] = useState<Word[]>([]);

  interface User {
    id: string;
    name: string;
    wordsLearned: string[];
    currentlyWords: string[];
    addWords: string[];
  }

  interface Word {
    id: string;
    dutch: string;
    english: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/users/1');
      setUser(response.data);

     

      const wordPromises = response.data.currentlyWords.map(async (wordId: number[]) => {
          const response = await axios.get(`http://localhost:3000/words/${wordId[0]}`);
          return response.data;
        });


     



        const words = await Promise.all(wordPromises);
        setCurrentlyWords(words);
    };
    fetchData();
  }, []);

  const renderedWords = currentlyWords.map((word: Word) => {
    return (
      <div key={word.id}>
        <h1>{word.dutch}</h1>
        <h1>{word.english}</h1>
      </div>
    );
  });

  return <div>{renderedWords}</div>;
}

export default LessonsPage;





