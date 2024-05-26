function insert(){
	var name = document.getElementById("Name").value;
	var org = document.getElementById("Org").value;
	var desg = document.getElementById("Desg").value;
	var email = document.getElementById("Email").value;
	var mobile = document.getElementById("Mobile").value;
	
	var buttn1 = document.getElementById("format1");
	var buttn2 = document.getElementById("format2");
	var buttn3 = document.getElementById("format3");
	var buttn4 = document.getElementById("format4");
	
	if(buttn1.checked){
		document.getElementById("ename1").innerHTML = name;
		document.getElementById("eorg1").innerHTML = org;
		document.getElementById("edesg1").innerHTML = desg + ', ';
		document.getElementById("eemail1").innerHTML = email;
		document.getElementById("emobile1").innerHTML = mobile;
		document.getElementById("Visiting-card2").style.display = "none";
		document.getElementById("Visiting-card3").style.display = "none";
		document.getElementById("Visiting-card4").style.display = "none";
		document.getElementById("Visiting-card1").style.display = "inline-block"; 
	}
	if(buttn2.checked){
		document.getElementById("ename2").innerHTML = name;
		document.getElementById("eorg2").innerHTML = org;
		document.getElementById("edesg2").innerHTML = desg + ', ';
		document.getElementById("eemail2").innerHTML = email;
		document.getElementById("emobile2").innerHTML = mobile;
		document.getElementById("Visiting-card1").style.display = "none"; 
		document.getElementById("Visiting-card2").style.display = "block";
		document.getElementById("Visiting-card3").style.display = "none";
		document.getElementById("Visiting-card4").style.display = "none";
	}

	if(buttn3.checked){
		document.getElementById("ename3").innerHTML = name;
		document.getElementById("eorg3").innerHTML = org;
		document.getElementById("edesg3").innerHTML = desg + ', ';
		document.getElementById("eemail3").innerHTML = email;
		document.getElementById("emobile3").innerHTML = mobile;
		document.getElementById("Visiting-card1").style.display = "none"; 
		document.getElementById("Visiting-card2").style.display = "none";
		document.getElementById("Visiting-card4").style.display = "none";
		document.getElementById("Visiting-card3").style.display = "inline-flex";
	}
	if(buttn4.checked){
		document.getElementById("ename4").innerHTML = name;
		document.getElementById("eorg4").innerHTML = org;
		document.getElementById("edesg4").innerHTML = desg + ', ';
		document.getElementById("eemail4").innerHTML = email;
		document.getElementById("emobile4").innerHTML = mobile;
		document.getElementById("Visiting-card1").style.display = "none";
		document.getElementById("Visiting-card2").style.display = "none";
		document.getElementById("Visiting-card3").style.display = "none"; 
		document.getElementById("Visiting-card4").style.display = "inline-flex";
	}
	
	//document.getElementById("information").reset();
	
}