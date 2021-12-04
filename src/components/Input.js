import React from "react";
import { useState } from "react";


export default function Input(props){

    const [text, setText] = useState();
   
     const handleChange = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        setText(e.target.value)
    }

    function choose() {
        if(props.FN == '1'){
            setAddPost({
                'name': text,
                'description': addPost.description,
                'ingredients2': addPost.ingredients2,
                'preparation4': addPost.preparation4
            })
            console.log(addPost)
        }else if(props.FN == '2'){
            setAddPost({
                'name': addPost.name,
                'description': text,
                'ingredients2': addPost.ingredients2,
                'preparation4': addPost.preparation4
            })
            console.log(addPost)
        }else if(props.FN == '3'){
            setAddPost({
                'name': addPost.name,
                'description': addPost.description,
                'ingredients2': text,
                'preparation4': addPost.preparation4
            })
            console.log(addPost)
        }else if(props.FN == '4'){
            setAddPost({
                'name': addPost.name,
                'description': addPost.description,
                'ingredients2': addPost.ingredients2,
                'preparation4': text
            })
            console.log(addPost)
        }
        
    }

    /* function choose() {
        if(props.FN == '1'){
            addPost.name= text;
            console.log(addPost)
        }else if(props.FN == '2'){
            addPost.description = text;
            console.log(addPost)
        }else if(props.FN == '3'){
            addPost.ingredients2 = text;
            console.log(addPost)
        }else if(props.FN == '4'){
            addPost.description= text;
            console.log(addPost)
        }
        console.log('this is addPost choose',addPost)
    } */

    /* 
function setName(){
        setAddPost({
            'name': text,
            'description': addPost.description,
            'ingredients2': addPost.ingredients2,
            'preparation4': addPost.preparation4
        })
        console.log(addPost)
    }
    function setDescription(){
        setAddPost({
            'name': addPost.name,
            'description': text,
            'ingredients2': addPost.ingredients2,
            'preparation4': addPost.preparation4
        })
        console.log(addPost)
    }
    function setIngredients2(){
        setAddPost({
            'name': addPost.name,
            'description': addPost.description,
            'ingredients2': text,
            'preparation4': addPost.preparation4
        })
        console.log(addPost)
    }
    function setPreparation4(){
        setAddPost({
            'name': addPost.name,
            'description': addPost.description,
            'ingredients2': addPost.ingredients2,
            'preparation4': text
        })
        console.log(addPost)
    } */

    const [addPost, setAddPost] = useState(
        {
            'name': '',
            'description': '',
            'ingredients2': [],
            'preparation4': []
        }
    );

    return(
        <div>
        <label>{props.labelText}</label>
            <input type="text" onChange={handleChange}></input>
            <button onClick={choose}>add</button>
        </div>
    )
}