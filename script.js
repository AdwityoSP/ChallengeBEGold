function switch_login() {  
  var data = document.getElementById("login");
  var data1 = document.getElementById("register"); 
  if(data.style.display === "block" ) {  
    data.style.display = "none";
    data1.style.display = "block";
    alert("REGISTER");
  } else {
    data.style.display = "block";
    data1.style.display = "none";
    alert("LOGIN");
  }   
}  