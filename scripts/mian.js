let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/favorite_FILL0_wght400_GRAD0_opsz48.png') {
        myImage.setAttribute('src', 'images/favorite_FILL1_wght400_GRAD0_opsz48.png');
    } else {
        myImage.setAttribute('src', 'images/favorite_FILL0_wght400_GRAD0_opsz48.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {

    let myName = prompt('请输入你爱人的名字：');

    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你爱的人' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {

    let storeName = localStorage.getItem('name');
    myHeading.textContent = '你爱的人' + storeName;
}

myButton.onclick = function() {
    setUserName();
}