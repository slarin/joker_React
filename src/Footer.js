import React from "react"

function Footer(){
	const styles = {
		fontSize:33
	} 
	
	const date = new Date()
	const tym = date.getHours()
	
	let greetin
	if (tym < 12){
		greetin = "Morning!"
		styles.color="yellow"
	}else if(tym >= 12 && tym < 17){
		greetin = "Afternoon!"
		styles.color="green"
	} else{
		greetin="Evening"
		styles.color="orange"
	}
	
	return(
		<div className= "footerDiv">
			<h2 style={styles}>Good {greetin}</h2>
		</div>
			
	)
}

export default Footer