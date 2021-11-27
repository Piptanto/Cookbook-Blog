import React from 'react';
import { client } from '../client';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/addPost.css';

export default function AddPost() {

    const [text, setText] = useState();
   
     const handleChange = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        setText(e.target.value)
    }

    const [RName, setRName] = useState('');
    const [RDescription, setRDescription] = useState('');
    const [RIngredients2, setRIngredients2] = useState([]);
    const [RRreparation4, setRPreparation4] = useState([]);
    
    const [addPost, setAddPost] = useState(
        {
            'name': '',
            'description': '',
            'ingredients2': [],
            'preparation4': []
        }
    );
    //console.log('this is addPost name',addPost.name)
    // console.log('this is addPost description',addPost.description)

    function setName(){
        setRName(text);
        document.getElementById('nameInput').value = '';
        // console.log('from setName',RName);
    }

    function setDescription(){
        setRDescription(text);
        document.getElementById('descriptionInput').value = '';
        // console.log('from setDescription ',RDescription)
    }

    function setIngredients() {
        setRIngredients2( arr => [...arr, `${text}`]);
        document.getElementById('ingredientInput').value = '';
        document.getElementById("ingredientInput").focus(); 
        // console.log('from setIngredients',RIngredients2)
    }

    function setPreparation() {
        setRPreparation4( arr => [...arr, `${text}`]);
        document.getElementById('preparationInput').value = '';
        document.getElementById("preparationInput").focus(); 
        // console.log('from setPreparation',RRreparation4)
    }

    



    const contentful = require('contentful-management')


    const addclient = contentful.createClient({
        accessToken: 'CFPAT-cevXEVat_mA6Rr5j6Fvv5KVqeATbc99Gee87egSdsgU',
        XContentfulContentType: 'Recipes'
    })



    function handleClick() {
        //console.log('aray data:', addRecipie.ingredients)
        
        addclient.getSpace('gt4lfw53kejq')
            .then((space) => space.getEnvironment('master'))
            .then((environment) => environment.createEntryWithId('recipes', uuidv4(), {
                fields:
                {
                    name: { 'en-US': RName },
                    description: { 'en-US': RDescription },
                    ingredients2: { 'en-US': RIngredients2 },
                    preparation4: { 'en-US': RRreparation4 }
                }
            })).then((entry) => entry.publish()).then((entry) => console.log(entry))
            .then(()=>{
                setRName('');
                setRDescription('');
                setRIngredients2([]);
                setRPreparation4([]);
            })
            .catch(console.error)


        //   updateImageUrl();
    }

    return (
        <div className='inputForum'>
            <h2>Add New Recipe</h2>
            <div className='inputF'>Through this form you can add new recipes. Please enter the required data and click on the add button for each field, and when finished click on the “Add Recipe” button</div>
            <div className='inputF'>
            <label>Recipe Name: </label>
            <input id='nameInput' type="text" onChange={handleChange}></input>
            <button onClick={setName}>add</button>
            </div>
            <div className='inputF'>
            <label>Description: </label>
            <textarea id='descriptionInput' name="message" rows="10" cols="30" onChange={handleChange}></textarea>
            <button onClick={setDescription}>add</button>
            </div>
            <div className='inputF'>
            <label>Ingredients: </label>
            <input id='ingredientInput' type="text" onChange={handleChange}></input>
            <button onClick={setIngredients}>add one</button>
            </div>
            <div className='inputF'>
            <label>Preparation: </label>
            <input id='preparationInput' type="text" onChange={handleChange}></input>
            <button onClick={setPreparation}>add one</button>
            </div>
            <div>
            <button className='addRecipeBtn' onClick={handleClick}>Add Recipe</button>
            </div>
        </div>
    )
}