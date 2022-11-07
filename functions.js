
//exercise 1
function validate()
{
  var myPassword = document.getElementById("password").value;
  var myValidate = document.getElementById("validate").value;

  if(myPassword.length<8)
  {
    alert("The length of your first password must be at least 8 characters")
  }
  else if(myValidate.length<8)
  {
    alert("The length of your validation password must be at least 8 characters")
  }
  else if(myPassword != myValidate)
  {
    alert("The two passwords do not match")
  }
  else
  {
    alert("Passwords validated successfully")
  }
}

//exercise 2
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


//exercise3
var slideIndex = 1;
showImg(slideIndex);

function plusDivs(n) {
  showImg(slideIndex += n);
}

function currentDiv(n) {
  showImg(slideIndex = n);
}

function showImg(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " white";
}


//exercise4
function newCSS() {

//initial approach
  var borderColor = document.getElementById("border").value;

  borderColor = borderColor.toUpperCase();
  if(borderColor == "RED")
  {
    document.getElementById('paragraph').style.borderColor = 'red';
  }
  else if(borderColor == "BLUE")
  {
    document.getElementById('paragraph').style.borderColor = 'blue';
  }
  else if(borderColor == "GREEN")
  {
    document.getElementById('paragraph').style.borderColor = 'green';
  }
}

//new approach
function setHex(){
  var borderWidth = document.getElementById("borderWidth").value;
  document.getElementById('paragraph').style.borderWidth = borderWidth;

  var borderShade = document.getElementById("borderColor").value;
  document.getElementById('paragraph').style.borderColor = borderShade;

  var backgroundShade = document.getElementById("backgroundColor").value;
  document.getElementById('paragraph').style.background = backgroundShade;

alert(rgb(1,1,2));
}
