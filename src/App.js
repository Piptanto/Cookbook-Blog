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
    console.log(response.items[1].fields.name);
    setArticles(response.items);
  }


  // update an item in a Recipe
  const contentful = require('contentful-management')

  async function Connect(){ 
    let client = await contentful.createClient({
      accessToken:  'CFPAT-cevXEVat_mA6Rr5j6Fvv5KVqeATbc99Gee87egSdsgU'
      // accessToken:  process.env.REACT_APP_ACCESS_TOKEN
    })
    let space = await client.getSpace('gt4lfw53kejq');
    return await space.getEnvironment('master');
  }

  async function updateCard(env, cardID){
    let item = await env.getEntry(cardID)
    //console.log(item.fields.name['en-US'])
    item.fields.name['en-US'] = 'Insalata Caprese';
    await item.update();
    item = await env.getEntry(cardID);
    await item.publish();
  }

  (async () => {
    let env = await Connect();
    await updateCard(env, '5VYaJdA8FsLTO3PWJyaYHj')
  })();

  return (
    <div className="App">
      <div className='container'>
      <header>
        <div className="wrapper"></div>
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
