import React, {useState, useEffect} from "react";
import '../styles/menu1.css';
import { IoIosMenu } from "react-icons/io";

import AnchorLink from 'react-anchor-link-smooth-scroll';



export default function Menu(props){
    const [windowDimension, setWindowDimension] = useState(null);
    const [mNavClosed, setNavClosed] = useState(true);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowDimension);
  const handleClick = () =>{
    mNavClosed? setNavClosed(false):setNavClosed(true)
  }



    return(
        <nav>
           <div> <IoIosMenu size ="70" color ="rgb(226, 121, 0)" className="mobile" onClick="handleClick"/></div>
        <menu className= {mNavClosed? "noned": "blocked"}>
                <li onClick ={() => props.cb2()}>Home</li>
                <li onClick ={() => props.cb('Breakfast')}>Breakfast</li>
                <li onClick ={() => props.cb('Lunch')}>Lunch</li>
                <li onClick ={() => props.cb('Dinner')}>Dinner</li>
                <li onClick ={() => props.cb('Snack')}>Snacks</li>            
                <li><AnchorLink href='#form'>New Recipe</AnchorLink></li>
            
            
            
  
            </menu>
  <div class="ribbon left"></div>
  <div class="ribbon right"></div>
</nav>
    )
}