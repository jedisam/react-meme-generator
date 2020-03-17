import React from "react"

import Header from "./Components/Header"
import MemeGenerator from "./Components/MemeGenerator"

class App extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header />
                <MemeGenerator />
            </div>
        )
    }
}

export default App