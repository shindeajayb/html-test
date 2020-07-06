let myImage = document.querySelector('img'); //select img tag and return its reference and store it in variable

//event
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla-logo.png'){
        myImage.setAttribute('src','images/mozilla-logo2.png');
    }else{
        myImage.setAttribute('src','images/mozilla-logo.png');
    }
}

//change-user-button-onclick

let userBtn = document.querySelector('.user-btn');
let mainHeading = document.querySelector('.header');

userBtn.onclick = function(){
    setUserName();
}
function setUserName(){
    let userName = prompt('Enter your name.');
    if(!userName){
        setUserName();
    }else{
        localStorage.setItem('username',userName);
        mainHeading.textContent = 'Mozilla is cool, ' + userName; 
    }
}
if(!localStorage.getItem('username')){
    setUserName();
}else{
    let storedUserName = localStorage.getItem('username');
    mainHeading.textContent = 'Mozilla is cool, ' + storedUserName;
}