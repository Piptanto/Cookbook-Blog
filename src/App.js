import './App.css';
import React from 'react';
import { client } from './client';
import { useState, useEffect } from 'react';
import Posts from './components/Posts'
import AddPost from './components/AddPost';
import Menu from './components/menue';

function App() {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState(false);

  function changeStatus(index) {
    const newstatus = !status;
    setStatus(newstatus);
    console.log(status);
    const result = articles.filter( articles => articles.sys.id !== index)
    setArticles(result);
  }

  useEffect(() => loadEntries(), [status])

  const loadEntries = async () => {
    const response = await client.getEntries();
    console.log(response.items);
    setArticles(response.items);
  }

  /* async function Connect() { //to connect with contentful

  // update an item in a Recipe
  const contentful = require('contentful-management')

  async function Connect(){ //to connect with contentful

    let client = await contentful.createClient({
      accessToken: 'CFPAT-cevXEVat_mA6Rr5j6Fvv5KVqeATbc99Gee87egSdsgU' //this key came from: Settings=> API keys=> Content management tokens (tab) =>  "Generate personal token" button.
    })
    let space = await client.getSpace('gt4lfw53kejq'); //this is the "Space ID". from Settings=> API keys=> Content delivery / preview tokens (tab).
    console.log(space)
    return await space.getEnvironment('master'); //"master" is the defualt enviroment.
  }

  async function updateRecipe(env, recipeID) { //to update an item in Recipe.
    let item = await env.getEntry(recipeID) //this will save the recipe as object in the variable.
    //console.log(item.fields.name['en-US'])
    item.fields.name['en-US'] = 'Insalata Caprese';
    //item.fields.name: in this case the name field will be changed to the new value between quotes.
    //'en-US': is a key
    await item.update(); //this will update the field in Contentful, but not published yet.
    item = await env.getEntry(recipeID); //to fetch the last item status from Contentful before publishing.
    await item.publish(); // to publish the changes.
  }


  
  (async () => { //to fire the functions inside
    let env = await Connect(); //By running this function, accessToken, Space ID, master, will be saved in env.
    await updateRecipe(env, '5VYaJdA8FsLTO3PWJyaYHj') //pass the "env" and recipeID to updateRecipe
 
  })(); */
  // or if you already have a fetched environment

  /* new_entry = environment.entries().create(
      'new_entry_id',
      entry_attributes
  ) */

  return (
    <div className="App">
      <div className='container'>
        <header>
          <div className="wrapper"><h6>- It Tastes Awesome! - </h6> -</div>
          <Menu />
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={articles} cb={changeStatus}/>
            <AddPost />
          </div>
          
        </main>
          
      </div>
    </div>
  );
}

export default App;
