import React from "react"
import "./mystyle.css"


import img from "./img/aeir.jpeg"
import img1 from "./img/23.jpeg"
import img2 from "./img/32.jpeg"
import img3 from "./img/cd.jpeg"
import img4 from "./img/enf.jpeg"
import img5 from "./img/im2.jpeg"
import img6 from "./img/im3.jpeg"
import img7 from "./img/drag.jpg"
import img8 from "./img/vd.jpeg"
import img9 from "./img/vtyt.jpeg"



class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            //randomImage:"http://i.imageflip.com/1bij.jpg",
            randImg:img2,
            im:[img,img1,img2,img3,img4,img5,img6,img7,img8,img9],
			images:img2
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random()*10)
        const randIm = this.state.im[randNum]
		this.setState({
			images:randIm
		 })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                <br/>
                <input type="text" name="topText"
                onChange={this.handleChange}
                value={this.state.topText}  placeholder="Enter Top
                 text"/>
                <input type="text" name="bottomText"
                onChange={this.handleChange}
                value={this.state.bottomText}  placeholder="Enter Bottom
                 text"/>
                <button>Gen</button>
                <br />
                <br/>
                </form>
                <div className="meme">
                    <img src={this.state.images} alt="cant find" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
    
   
}

export default MemeGenerator