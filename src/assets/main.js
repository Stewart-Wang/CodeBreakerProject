let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value==''||attempt.value=='') setHiddenFields();
    if(!validateInput(attempt.innerHTML)) return false;
    else attempt.value = attempt.value +1;
    if(getResults==true) {setMessage("You Win! :)");showAnswer(true);}
    else if(attempt.value>=10) {setMessage("You Lose! :(");showAnswer(false);}
    	else setMessage("Incorrect, try again.");
}

//implement new functions here
function setHiddenFields(){
	answer.value = Math.floor(Math.random()*10000).toString();	
	while(answer..value.length < 4){
		answer.value = "0"+answer.value;
	}
	attempt.value = "0";
}

function setMessage(message){
	document.getElementById('message').innerHTML = message;	
}

function validateInput (input){
	if(input.length==4) return true;
	else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
		}
}

function getResults(guess){
	var guesstprocess;
	let correctCount = 0;
	guesstprocess +='<div class="row"><span class="col-md-6">';
	for(let i=0;i<4;i++){
		
		if(guess.charAt(i)==answer.charAt(i)) {
			guesstprocess += '<span class="glyphicon glyphicon-ok">'+guess.charAt(i)+'</span>';
			correctCount++;
		}
		else if (answer.match(guess.charAt(i))==null ) guesstprocess += '<span class="glyphicon glyphicon-transfer">'+guess.charAt(i)+'</span>';
			else guesstprocess += '<span class="glyphicon glyphicon-remove">'+guess.charAt(i)+'</span>';
		
	}	
	guesstprocess += '</div>';	
	results.innerHTML = guesstprocess;
	if(correctCount--4) return true;
	else return false;
}

function showAnswer(win){
	code.innerHTML = answer.value;
	if(win) code.className.add(" success");
	else code.className.add(" failure");
}

function showReplay(){
	${}
}