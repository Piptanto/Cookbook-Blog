import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/post.css';
import { FaUtensils } from "react-icons/fa";

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
        console.log(favorite[id]);
        console.log(favorite);

    };

    return (

        <>
        {
        props.posts.map((element, id) => (
            <div className={visible? "post postBig" : "post" } key={id}>
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
            </div>
        )
        )}
        </>
        )

    }