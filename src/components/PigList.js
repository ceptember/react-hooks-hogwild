import React, {useState} from "react"
import FullDetails from "./FullDetails"

function PigList ({pigs}){

    const [activeHog, setActiveHog] = useState("")

    function hogDetails (event){
        setActiveHog(event.target.id)
    }

    return(
        <div className="ui grid container">
            {pigs.map( (hog) => {
                return (
                <div className="ui eight wide column card" key={hog.name} id={hog.name} onClick={hogDetails} >
                    {hog.name}
                    <br />
                    <img width="200px" src={hog.image} id={hog.name}/>
                    {activeHog === hog.name ? <FullDetails hogInfo={hog}/> : ""}
                </div> 
                )} )}
        </div>
    )
}

export default PigList; 