var database = [
	{
		username: "Gabriel",
		password: "password"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "Ingred",
		password: "777"
	}
];

var newsFeed = [
{
		username: "Bobby",
		timeline: "So tired from studying all day!!"
	},
	{
		username: "Sally",
		timeline: "Javascript is cool!"
	}
];
 
function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and/or password.")
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);