const loginform=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}  

function paintGreeting(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);


if(savedUsername===null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}