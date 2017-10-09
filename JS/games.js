//Variables
var cp=0.00;
var dp=0.00;
var hp=0.00;
var lp=0.00;
var pp=0.00;
var tp=0.00;
var total=0.00;
//Variables

//========== Start of All ============================================================================================================
function All(){
	if (sessionStorage.clickcountC) {
		sessionStorage.clickcountC = Number(sessionStorage.clickcountC);
    } 
	else {
		sessionStorage.clickcountC = 0;
    } 
	
	cp=40.00*sessionStorage.clickcountC;
	
	document.getElementById("Counter").innerHTML= "Counter-Strike("+sessionStorage.clickcountC+") = $"+cp+".00";
	//====== Counter-Strike /\ || Dota \/ ==========================================================================
	if (sessionStorage.clickcountD) {
		sessionStorage.clickcountD = Number(sessionStorage.clickcountD);
    } 
	else {
		sessionStorage.clickcountD = 0;
    } 
	
	dp=5.00*sessionStorage.clickcountD;
	
	document.getElementById("Dota").innerHTML= "Dota("+sessionStorage.clickcountD+") = $"+dp+".00";
	//====== Dota /\ || Half-Life \/ ==============================================================================
	if (sessionStorage.clickcountH) {
		sessionStorage.clickcountH = Number(sessionStorage.clickcountH);
    } 
	else {
		sessionStorage.clickcountH = 0;
    } 
	
	hp=30.00*sessionStorage.clickcountH;
	
	document.getElementById("Half").innerHTML= "Half-Life("+sessionStorage.clickcountH+") = $"+hp+".00";
	//====== Half-Life /\ || Left4Dead \/ ==========================================================================
	if (sessionStorage.clickcountL) {
		sessionStorage.clickcountL = Number(sessionStorage.clickcountL);
    } 
	else {
		sessionStorage.clickcountL = 0;
    } 
	
	lp=20.00*sessionStorage.clickcountL;
	
	document.getElementById("Left4Dead").innerHTML= "Left4Dead("+sessionStorage.clickcountL+") = $"+lp+".00";
	//====== Left4Dead /\ || Portal \/ =============================================================================
	if (sessionStorage.clickcountP) {
		sessionStorage.clickcountP = Number(sessionStorage.clickcountP);
    } 
	else {
		sessionStorage.clickcountP = 0;
    } 
	
	pp=50.00*sessionStorage.clickcountP;
	
	document.getElementById("Portal").innerHTML= "Portal("+sessionStorage.clickcountP+") = $"+pp+".00";
	//====== Portal /\ || Team Fortress \/ =========================================================================
	if (sessionStorage.clickcountT) {
		sessionStorage.clickcountT = Number(sessionStorage.clickcountT);
    } 
	else {
		sessionStorage.clickcountT = 0;
    } 
	
	tp=30.00*sessionStorage.clickcountT;
	
	document.getElementById("Team").innerHTML= "Team Fortress("+sessionStorage.clickcountT+") = $"+tp+".00";
	//====== Team Fortress /\ || Total \/ =========================================================================
	total=cp+dp+hp+lp+pp+tp;
	
	document.getElementById("Total").innerHTML= "Total = $"+total+".00";
}
//========== End of All ===================================================================================================================

//========== Start of Counter-Strike ======================================================================================================
function CounterPlus() {
	sessionStorage.clickcountC = Number(sessionStorage.clickcountC)+1;
	All();
}
function CounterMinus() {
	if(sessionStorage.clickcountC>0){
	sessionStorage.clickcountC = Number(sessionStorage.clickcountC)-1;
	}

	All();
}
//========== End of Counter-Strike ========================================================================================================

//========== Start of Dota ================================================================================================================
function DotaPlus() {
	sessionStorage.clickcountD = Number(sessionStorage.clickcountD)+1;
	All();
}
function DotaMinus() {
	if(sessionStorage.clickcountD>0){
	sessionStorage.clickcountD = Number(sessionStorage.clickcountD)-1;
	}

	All();
}
//========== End of Dota ==================================================================================================================

//========== Start of Halflife ============================================================================================================
function HalfPlus() {
	sessionStorage.clickcountH = Number(sessionStorage.clickcountH)+1;
	All();
}
function HalfMinus() {
	if(sessionStorage.clickcountH>0){
	sessionStorage.clickcountH = Number(sessionStorage.clickcountH)-1;
	}

	All();
}
//========== End of HalfLife ==============================================================================================================

//========== Start of Left4Dead ===========================================================================================================
function Left4DeadPlus() {
	sessionStorage.clickcountL = Number(sessionStorage.clickcountL)+1;
	All();
}
function Left4DeadMinus() {
	if(sessionStorage.clickcountL>0){
	sessionStorage.clickcountL = Number(sessionStorage.clickcountL)-1;
	}

	All();
}
//========== End of Left4Dead =============================================================================================================

//========== Start of Portal ==============================================================================================================
function PortalPlus() {
	sessionStorage.clickcountP = Number(sessionStorage.clickcountP)+1;
	All();
}
function PortalMinus() {
	if(sessionStorage.clickcountP>0){
	sessionStorage.clickcountP = Number(sessionStorage.clickcountP)-1;
	}

	All();
}
//========== End of Portal ================================================================================================================

//========== Start of Team Fortress =======================================================================================================
function TeamPlus() {
	sessionStorage.clickcountT= Number(sessionStorage.clickcountT)+1;
	All();
}
function TeamMinus() {
	if(sessionStorage.clickcountT>0){
	sessionStorage.clickcountT = Number(sessionStorage.clickcountT)-1;
	}

	All();
}
//========== End of Team Fortress =========================================================================================================

//========== Start of Check Out =======================================================================================================
function CheckPlus() {
	if(sessionStorage.user===undefined){
		window.location = "../pages/login.html";
		alert ("Please Login!");
	}
	else{
		if(sessionStorage.street2storage===undefined){
			window.location = "../pages/userinfo.html";
			alert ("Please Fill Details!");
		}
		else{
			sessionStorage.clickcountC=0;
			sessionStorage.clickcountD=0;
			sessionStorage.clickcountH=0;
			sessionStorage.clickcountL=0;
			sessionStorage.clickcountP=0;
			sessionStorage.clickcountT=0;
			alert ("Purchase Successful!");
			window.location = "../pages/AddToCart.html";
		}
	}
}
//========== End of Check Out =========================================================================================================
