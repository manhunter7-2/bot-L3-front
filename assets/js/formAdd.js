const submit = document.querySelector('.submit');
const questionIn = document.querySelector('#question-input');
const answerIn = document.querySelector('#answer-input');

submit.addEventListener("click", function(event){
    console.log(questionIn.value);
    console.log(answerIn.value);
    var obj = {
        question: questionIn.value,
        answer: answerIn.value
    };
    fetch("https://backend-tpiquet.onrender.com/create", {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    });
    event.preventDefault();
})