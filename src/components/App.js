import React, {useState} from "react";
import Nav from "./Nav";
import PigList from "./PigList"; 
import Filter from "./Filter"; 

import hogs from "../porkers_data";

function App() {
	const [hogsToShow, setHogsToShow] = useState(hogs); 

	function filterGreased(event){
		console.log("filtering " )
		setHogsToShow(hogsToShow.filter( (hog) => {
			if (event.target.value === "greased"){
				return hog.greased;
			}
			else if (event.target.value === "ungreased"){
				return !hog.greased;
			}
			else {
				return true; 
			}
		} ))
	}

	function sortBy(event){
		if (event.target.value === "weight"){
			//const sortedHogs = hogsToShow.sort( (a,b) => (a.weight - b.weight))
			const newHogs = [...hogsToShow]
			const sortedHogs = newHogs.sort( (a,b) => (a.weight - b.weight))
			setHogsToShow(sortedHogs)
			console.log(hogsToShow);
			console.log(hogs)
		}

		else if (event.target.value === "name"){
			const newHogs = [...hogsToShow];
			const sortedHogs = newHogs.sort( (a,b) => {
				if (a.name < b.name){
					return -1;
				}
				else if (a.name > b.name){
					return 1; 
				}
				else {
					return 0; 
				}
			})
			console.log(sortedHogs)
			setHogsToShow(sortedHogs)
		}
		else {
			setHogsToShow(hogs); 
		}
		
	}

	return (
		<div className="App">
			<Nav />
			<Filter filterGreased={filterGreased} sortBy={sortBy}/>
			<PigList pigs={hogsToShow}/>
		</div>
	);
}

export default App;
