import React from "react"; 

function Filter({filterGreased, sortBy}){
    return(
        <div style={{minHeight: 75}}>
            <form>
                <label>
                    FILTER 
                    <select onChange={filterGreased}>
                        <option value="all">All</option>
                        <option value="greased">Greased</option>
                        <option value="ungreased">Not Greased</option>
                    </select>
                </label>
                <br />
                <label>
                    SORT BY: 
                    <select onChange={sortBy}>
                        <option value = "unsorted" >Select One</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </label>
            </form>
        </div>
    )

}

export default Filter; 