import React from 'react'; 

function FullDetails({hogInfo}){
    return (
        <div> 
            <h4>Details</h4>
            <p>Specialty: {hogInfo.specialty}</p>
            <p>Weight: {hogInfo.weight}</p>
            <p>Greased: {hogInfo.greased ? "Yes" : "No"}</p>
            <p>Highest medal achieved: {hogInfo["highest medal achieved"]}</p>
        </div>
    )
}

export default FullDetails; 