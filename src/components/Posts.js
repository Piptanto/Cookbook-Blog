import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/post.css';
export default function Posts(props) {
    //const desponseHtml = marked(description);

    const[visible, setVisible] = useState([]);
   

    const growbig =(id) => {
        const oldArray = [...visible];
        oldArray[id] = !visible[id];
        setVisible([...oldArray])
    }

    useEffect(() =>{
        const newArray =[];
        for (let item of props.posts) {newArray.push(false)}
    },[]);

    return (
        <>
        {
        props.posts.map((element, id) => (
            // {setVisible([...visible, false])}
            <div className={visible[id]? "post postBig" : "post" } key={id} onClick={() => growbig(id)}>
                <img src={element?.fields?.image?.fields?.file?.url}  className="recipeImage"/>
                <h2>{element?.fields?.name}</h2>
                <div className={visible[id]? "" : "hidden" }>
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
            </div>
        )
        )}
        </>
        )
    }