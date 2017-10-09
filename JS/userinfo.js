

function userdetails(){
	sessionStorage.namestorage = document.myform3.nameinfo.value;
	sessionStorage.cardtypestorage = document.myform3.cardtype.value;
	sessionStorage.cardnumberstorage = document.myform3.cardnumberinfo.value;
	sessionStorage.street1storage = document.myform3.street1info.value;
	sessionStorage.street2storage = document.myform3.street2info.value;
	
	document.getElementById("nameinfo").innerHTML =  '<p id="nameinfo" >Name : '+sessionStorage.namestorage+'</p>';
	document.getElementById("usercardtype").innerHTML =  '<p id="usercardtype" >Card Type: '+sessionStorage.cardtypestorage+'</p>';
	document.getElementById("usercardnum").innerHTML =  '<p id="usercardnum" >Card Number: '+sessionStorage.cardnumberstorage+'</p>';
	document.getElementById("userstreet1").innerHTML =  '<p id="userstreet1" >Street Line 1: '+sessionStorage.street1storage+'</p>';
	document.getElementById("userstreet2").innerHTML =  '<p id="userstreet2" >Street Line 2: '+sessionStorage.street2storage+'</p>';
	
}






function redodetails(){
	
	if(sessionStorage.namestorage===undefined){
		
	}else{
		
		document.getElementById("nameinfo").innerHTML =  '<p id="nameinfo" >Name : '+sessionStorage.namestorage+'</p>';
		document.getElementById("usercardtype").innerHTML =  '<p id="usercardtype" >Card Type: '+sessionStorage.cardtypestorage+'</p>';
		document.getElementById("usercardnum").innerHTML =  '<p id="usercardnum" >Card Number: '+sessionStorage.cardnumberstorage+'</p>';
		document.getElementById("userstreet1").innerHTML =  '<p id="userstreet1" >Street Line 1: '+sessionStorage.street1storage+'</p>';
		document.getElementById("userstreet2").innerHTML =  '<p id="userstreet2" >Street Line 2: '+sessionStorage.street2storage+'</p>';
		
		
		
		
		
	}
	document.getElementById("userName").innerHTML =  '<p id="userName">Username: '+sessionStorage.user+'</p>';
	document.getElementById("useremail").innerHTML =  '<p id="userName" >Email Address: '+sessionStorage.emailstorage+'</p>';
	document.getElementById("usertitle").innerHTML =  'Valve - '+sessionStorage.user+' Details';
}






