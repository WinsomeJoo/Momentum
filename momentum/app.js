const loginInput=document.querySelector("#login-form input")
const loginButton=document.querySelector("#login-form button")


function onLogBtnClick(){
    const userName= loginInput.value;
    if(userName===""){
        alert("please write your name")
    }else if(userName.length>=15){
        alert("your name is too long")
    }
}

loginButton.addEventListener("click",onLogBtnClick)