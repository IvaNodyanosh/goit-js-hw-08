const throttle = require('lodash.throttle');


const form = document.querySelector("form");
const button = document.querySelector("button");
console.log(form);
console.log(button);





const addData = function () {
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: form.email.value, message: form.message.value }));

};


    





if (localStorage.getItem("feedback-form-state")) {

    try {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.email.value = data.email;
    form.message.value = data.message;
    } catch (error) {
        console.log(error.message);
    }


};





const formSubmit = function (event) {

    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    

    form.email.value = "";
    form.message.value = "";

    localStorage.removeItem("feedback-form-state");

};


form.addEventListener("input", throttle(() => {
    addData()
  }, 1000));


form.addEventListener("submit", (event) => formSubmit(event));






