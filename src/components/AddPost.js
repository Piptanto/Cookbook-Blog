import React from 'react';
import { client } from '../client';
import { useState, useEffect } from 'react';

export default function AddPost() {

    const [text, setText] = useState();
   
     const handleChange = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        setText(e.target.value)
    }


    const [addPost, setAddPost] = useState(
        {
            'name': '',
            'description': '',
            'ingredients2': [],
            'preparation4': []
        }
    );
    const contentful = require('contentful-management')


    const addclient = contentful.createClient({
        accessToken: 'CFPAT-cevXEVat_mA6Rr5j6Fvv5KVqeATbc99Gee87egSdsgU',
        XContentfulContentType: 'Recipes'
    })


    function handleClick() {
        //console.log('aray data:', addRecipie.ingredients)
        
        addclient.getSpace('gt4lfw53kejq')
            .then((space) => space.getEnvironment('master'))
            .then((environment) => environment.createEntryWithId('recipes', '5VYaJdA8FsLTO3PWJyaYHX', {
                fields:
                {
                    name: { 'en-US': addPost.name },
                    description: { 'en-US': addPost.description },
                    ingredients2: { 'en-US': addPost.ingredients2 },
                    preparation4: { 'en-US': addPost.preparation4 }
                }
            })).then((entry) => entry.publish()).then((entry) => console.log(entry))
            .catch(console.error)

        //   updateImageUrl();
    }

    return (
        <div>
            <label>Recipe Name:</label>
            <input type="text" onChange={handleChange}></input><br></br>
            <label>Description:</label>
            <textarea name="message" rows="10" cols="30" onChange={handleChange}></textarea><br></br>
            <button onClick={handleClick}>add</button>
        </div>
    )
}