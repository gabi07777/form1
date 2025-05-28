const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
 e.preventDefault(); 

 checkInputs();
});
 
function checkInputs() {
     const usernameValue = username.value;
     const emailValue = email.value;
     const passwordValue = password.value;
     const passwordConfirmationValue = passwordConfirmation.value;

     if (usernameValue == ''){
        setErrorfor(username, 'O nome de usúario é obrigatório');
     } else {
        setSucessFor(username);
     }

     if (emailValue == '') {
       setErrorfor(email, 'O email é obrigatório.');
     } else if (!checkEmail(emailValue)) {
         setErrorfor(ElementInternals,'Por favor, insira um email valido')
    } else {
        setSucessFor(email);
     }
     if (passwordValue == ''){
        setErrorfor(password,'A senha é obragatória');
     } else if (passwordValue.lenght < 7) {
        setErrorfor(password, "A senha precisa de ter no mimo 7 caracteres.");
     } else {
        setSucessFor(password);
     }
     
}

 function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.classname = "form-control error";


 }

 function setSucessFor(input){
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control sucess";
 }

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  ); }