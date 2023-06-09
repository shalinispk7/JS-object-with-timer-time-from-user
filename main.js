// Get current time and find(morning,afternoon,or night)

let user = prompt("Enter time (HH:MM (24 hrs)format)")
if((user>24) || (user<0)){
	alert("24-Hour Time Format, So enter time HH:MM like this");
}
else{
	let userTime= new Date();
	let a=userTime.setHours(user)

	let result=userTime.getHours()
		if(result >= 6 && result <12){
			document.write("Good Morning! "+"It's "+result+" am");
		}
		else if(result >= 12 && result <16){
			document.write("Good Afternoon! "+"It's "+result+" pm");
		}
		else if(result >= 16 && result <18){
			document.write("Good Evening! "+"It's "+result+" pm");
		}
		else if(result >= 18 && result <=24){
			document.write("Good Night! "+"It's "+result+" pm");
		}
		else if(result >=1 && result <6){
			document.write("Mid night! "+"It's "+result+" pm");
		}
}	
	






// let userTime = prompt("Enter time (HH:MM (24 hrs)format)")
// let splitTime = userTime.split(':');
 // a =  parseInt(splitTime[0]);
	// if(a >= 6 && a <12){
		// document.write("Good Morning! "+"It's "+a+" am");
	// }
	// else if(a >= 12 && a <16){
		// document.write("Good Afternoon! "+"It's "+a+" pm");
	// }
	// else if(a >= 16 && a <18){
		// document.write("Good Evening! "+"It's "+a+" pm");
	// }
	// else if(a >= 18 && a <=24){
		// document.write("Good Night! "+"It's "+a+" pm");
	// }
	// else if(a >=1 && a <6){
		// document.write("Mid night! "+"It's "+a+" pm");
	// }
	
	// else{
		// alert("24-Hour Time Format, So enter time HH:MM like this");
	// }
	
	
