const handleFormSubmit = event => {
	event.preventDefault();
	let data = {
		name: form.elements.name.value,
		email: form.elements.email.value,
		company: form.elements.company.value,
		website: form.elements.website.value
	}
	let dataJson = JSON.stringify(data, null, "  ");
	console.log(dataJson);

	let signup = new XMLHttpRequest();
	signup.open("POST", 'my.json', true);
	signup.send(dataJson); 
	signup.onreadystatechange = function() {
    	console.log(signup.status);
    	if (signup.readyState != 4) return;
		if (signup.status != 200) {
        	showError();
    	} else {
    		showThankyou();
    		form.reset();
        }
	};
};

const form = document.getElementsByClassName('main-form')[0];
form.addEventListener('submit', handleFormSubmit);


const input = document.getElementsByTagName('input');

for (let i = 0; i < input.length; i++){
	input[i].oninvalid = function(e) {
		e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("This is a required field");
        }
	 };
    input[i].oninput = function(e) {
        e.target.setCustomValidity("");
    };
};

let thankYou = document.getElementById('thankyou');
let error = document.getElementById('error');

let showThankyou = function(){
	thankyou.style.visibility="visible";
}
let hideThankyou = function(){
	thankyou.style.visibility="hidden";
}
let showError = function(){
	error.style.visibility="visible";
}
let hideError = function(){
	error.style.visibility="hidden";
}