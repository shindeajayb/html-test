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