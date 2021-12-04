import React, {useState, useEffect} from "react";
import '../styles/menu1.css';
import { IoIosMenu } from "react-icons/io";



export default function Menu(){
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
                <li>Home</li>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Diner</li>
                <li>Snacks</li>
                <li>My Favorites</li>                
                <li>New Recipe</li>
            
            
            
  
            </menu>
  <div class="ribbon left"></div>
  <div class="ribbon right"></div>
</nav>
    )
}