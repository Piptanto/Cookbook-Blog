import './App.css';
import React from 'react';
import { client } from './client';
import {useState, useEffect} from 'react';
import Posts from './components/Posts'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => loadEntries(), [])
  
  const loadEntries = async () => {
    const response = await client.getEntries();
    console.log(response.items);
    setArticles(response.items);
  }

  return (
    <div className="App">
      <div className='container'>
      <header>
        <div className="wrapper"><h6>- It Tastes Awesome! - </h6> -</div>
      </header>
      <main>
      <div className="wrapper">
        <Posts  posts={articles}/>
      </div>
      </main>
      </div>
    </div>
  );
}

export default App;
