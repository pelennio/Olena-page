var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Olena1.jpg') {
      myImage.setAttribute ('src','images/Olena2.jpg');
    } else {
      myImage.setAttribute ('src','images/Olena1.jpg');
    }
}

var header = document.querySelector('h1');
console.log('verify header');
header.onclick = function() {
    var mySrc1 = header.textContent;
    console.log('set function');
    console.log('mySrc = '+ mySrc1);
    if(mySrc1 === 'Olena Pohorila') {
      console.log('yes');
      header.textContent = 'Olena!';
    } else {
      header.textContent='Olena Pohorila';
      console.log('no');
    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my page, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
