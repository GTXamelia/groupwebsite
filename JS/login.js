
var count = 2;
function validate(){
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;
var unArray = ["cian2009", "MrLarkin24", "Eddie", "KevinBawi"];  // as many as you like - no comma after final entry
var pwArray = ["dankmemes", "dank", "Sleepislove", "Password123"];  // the corresponding passwords;
var emArray = ["G00337022@gmit.ie","DidYouKnowMyDadsGonnaBeMayorOfGalway?@Yahoo.com","Eddie@hotmail.co.uk","bawi@mail.ru"];

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
sessionStorage.emailstorage=emArray[i];
valid = true;
break;
}
}

if (valid) {
alert ("Login was successful");
sessionStorage.user=un;
sessionStorage.pw=pw;
document.getElementById("user").innerHTML =  '<span class = "log" id="user"><a href="login.html">'+sessionStorage.user+'</a></span>';
window.location = "../home.html";
sessionStorage.check=true;
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.  You have " + count + t + " left.");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

else {
alert ("Still incorrect! You have no more tries left!");
document.myform.username.value = "No more tries allowed!";
document.myform.pword.value = "";
document.myform.username.disabled = true;
document.myform.pword.disabled = true;
sessionStorage.check=false;
return false;
}
window.onload = logininfo;
}

function signup(){
var unsignup = document.myform2.usernamesignup.value;
var pw1signup = document.myform2.pword1signup.value;
var pw2signup = document.myform2.pword2signup.value;
var em1signup = document.myform2.email1signup.value;
var em2signup = document.myform2.email2signup.value;

var unArray = ["cian2009", "MrLarkin24", "Eddie", "KevinBawi"];
var a = unArray.indexOf(unsignup);



if(a>-1){
	alert("Username "+unsignup+" is already taken"+"\nPlease enter a different username");
}else{
	sessionStorage.user=unsignup;
	if(pw1signup!=pw2signup){
	alert("Passwords do not match"+"\nPlease re-enter your password");
	}else{
	sessionStorage.pw=pw1signup;
	if(em1signup!=em2signup){
	alert("Email addresses do not match"+"\nPlease re-enter your email address");
	}else{
	sessionStorage.emailstorage=em1signup;
	document.getElementById("user").innerHTML =  '<span class = "log" id="user"><a href="login.html">'+sessionStorage.user+'</a></span>';
	sessionStorage.check=true;
	window.location = "../home.html";
	}
	}
	
}



}

function logininfo(){
	if(sessionStorage.check){
		document.getElementById("user").innerHTML =  '<span class = "log" id="user"><a href="userinfo.html">'+sessionStorage.user+'</a></span>';
	}else {
		document.getElementById("user").innerHTML =  '<span class = "log" id="user"><a href="login.html">Login</a></span>';
	}
}

function logininfohome(){ //Login Settings for home with links that works for different fil location
	if(sessionStorage.check){
		document.getElementById("user").innerHTML =  '<span class = "log" id="user"><a href="pages/userinfo.html">'+sessionStorage.user+'</a></span>';
	}else {
		document.getElementById("user").innerHTML =  '<span class = "log" id="user"><a href="pages/login.html">Login</a></span>';
	}
	
}

function logout(){
	sessionStorage.clear();
	window.location = "../home.html";
}