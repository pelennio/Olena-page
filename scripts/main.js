var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var header = document.querySelector('h1');
console.log('verify header');

header.onclick = function() {
    var mySrc1 = header.textContent;
    console.log('set function');
    console.log('mySrc = '+ mySrc1);
    if(mySrc1 === 'Mozilla is cool') {
      console.log('yes');
      header.textContent = 'Olena!';
    } else {
      header.textContent='Mozilla is cool';
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
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}