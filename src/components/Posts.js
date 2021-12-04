import React, { useContext, useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/post.css';
import { client } from '../client';
import { FaUtensils, FaMinusCircle } from "react-icons/fa";

const contentful = require('contentful-management')


export default function Posts(props) {
    //const desponseHtml = marked(description);

    const[visible, setVisible] = useState(false);
    const [favorite, setFavorite] = useState([]);

    props.posts.map(obj=> ({ ...obj, favorite: 'false' }))
   

    function Growbig(){
        visible? setVisible(false): setVisible(true);
    }

    useEffect(() => favoriteSelection(), [])

    const favoriteSelection = (id) => { 
        const newFavorites = [...favorite];
      newFavorites[id] = ! newFavorites[id];
       setFavorite([...newFavorites]);

    };

    const client = contentful.createClient({
        accessToken: 'CFPAT-cevXEVat_mA6Rr5j6Fvv5KVqeATbc99Gee87egSdsgU'
      })

        async function Unpublish(id, key) {
    await client.getSpace('gt4lfw53kejq')
    .then((space) => space.getEnvironment('master'))
    .then((environment) => environment.getEntry(id.toString()))
    .then((entry) => entry.unpublish())
    .then((entry) => console.log(`Entry ${entry.sys.id} unpublished.`))
    .catch(console.error);
    props.cb(id);
    const newArray = favorite;
    newArray.splice(key,1);
    setFavorite(newArray);
      }

    return (

        <>
        {
        props.posts.map((element, id) => (
            // {setVisible([...visible, false])}
            <div className={visible[id]? "post postBig" : "post" } key={id} >
                <img src={element?.fields?.image?.fields?.file?.url}  className="recipeImage" onClick={Growbig}/>
                <h2>{element?.fields?.name}</h2>
                <div className={visible? "" : "hidden" }>
                <p>{element?.fields?.description}</p>
               
                <h3>Ingredients:</h3>
                <ul className="ingredients">
                {
                element?.fields?.ingredients2?.map((element,id) => (
                      <li key={id}>{element}</li>
                ))}
                </ul>
                <h3>Preparation:</h3>
                <ol className="preparation">
                {
                element?.fields?.preparation4?.map((element,id) => (
                      <li key={id}>{element}</li>
                ))}
                </ol></div>
                <FaUtensils className='FaUtensils'
        color={favorite[id] ? "rgb(226, 121, 0)" : "lightgrey"}
        onClick={() => favoriteSelection(id)}
        style={{ cursor: "pointer" }}
      />
        <FaMinusCircle className='FaMinusCircle'
        onClick ={() => Unpublish(element?.sys?.id, id)}
        />
            </div>
        )
        )}
        </>
        )

    }