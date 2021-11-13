import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Posts(props) {
    //const desponseHtml = marked(description);

    return (
    <>
    {
    props.posts.map((element, id) => (
        <div className="post" key={id}>
            <h1>{element?.fields?.name}</h1>
            <img src={element?.fields?.image?.fields?.file?.url}  className="recipeImage"/>
            <div><ReactMarkdown>{element?.fields?.description}</ReactMarkdown></div>
        </div>
    )
    )}
    </>
    )
    }