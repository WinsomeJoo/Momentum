const loginform=document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input")
const greeting=document.querySelector("#greeting")
const HIDDEN_CLASSNAME="hidden"


function onLoginSubmit(event){
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    greeting.innerText='Hello ${username}';

    greeting.classList.remove(HIDDEN_CLASSNAME)
    
}

loginform.addEventListener("submit",onLoginSubmit)