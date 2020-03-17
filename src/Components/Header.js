import React from "react"
import img from "../images/Trollface.png"
import "./mystyle.css"


function Header(){
    return(
        <header className="head">
            <img src={img} alt="problem" />
            <p>Meme Generator</p>
        </header>
        
    )
}

export default Header