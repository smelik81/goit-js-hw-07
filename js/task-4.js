
const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    const infoObj = {
      email: elements.email.value.trim(),
      password: elements.password.value.trim(),
    };
    const result = infoObj;
    if ((email === "" && !email.includes('@'))|| password === "") {
        alert("All form fields must be filled in");
    } else {
        console.log(result);
    }
    event.target.reset(); 
};








