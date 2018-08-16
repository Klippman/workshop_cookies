var visited = Cookies.get("sugar")
    if(!visited) {
        Cookies.set("sugar", 0)
        Cookies.set("chocolate", 0)
        Cookies.set("lemon", 0)
    }


document.getElementById("one").onclick = function(){
    var sugarCookieCount = Cookies.get("sugar");
    Cookies.set("sugar", ++sugarCookieCount); 
    document.getElementById("sugar1").innerHTML = " You have " + sugarCookieCount + " sugar cookies! ";
    document.getElementById("sugar1").style.color = "#0052cc";
    document.getElementById("sugar1").style.fontSize = "small";
}

document.getElementById("two").onclick = function(){
    var chocCookieCount = Cookies.get("chocolate");
    Cookies.set("chocolate", ++chocCookieCount);
    document.getElementById("chocolate1").innerHTML = " You have " + chocCookieCount + " chocolate cookies! ";
    document.getElementById("chocolate1").style.color = "#0052cc";
    document.getElementById("chocolate1").style.fontSize = "small";
}

document.getElementById("three").onclick = function(){
    var lemonCookieCount = Cookies.get("lemon");
    Cookies.set("lemon", ++lemonCookieCount); 
    document.getElementById("lemon1").innerHTML = " You have " + lemonCookieCount + " lemon cookies! ";
    document.getElementById("lemon1").style.color = "#0052cc";
    document.getElementById("lemon1").style.fontSize = "small";
}

document.getElementById("box1").onclick = function(){
    var cookiesChomped = parseInt(Cookies.get("sugar")) + parseInt(Cookies.get("chocolate")) + parseInt(Cookies.get("lemon"));
    alert (" I can't believe you chomped " + cookiesChomped + " cookies! ");
}

document.getElementById("box2").onclick = function(){
    Cookies.set("sugar", 0) + Cookies.set("chocolate", 0) + Cookies.set("lemon", 0);
    alert("You have zero cookies! Have a nice day!");
    document.getElementById("sugar1").style.display = "none";
    document.getElementById("chocolate1").style.display = "none";
    document.getElementById("lemon1").style.display = "none";
}


