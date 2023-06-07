const datalist = document.querySelector('#datalist');
const inputDialog = document.querySelector(".input-question");
const answerSec = document.querySelector(".answer-section");
var fetchedData;
let answer;

console.log('coucou from apijs')

fetch("https://backend-tpiquet.onrender.com/allchats")
.then(response => response.json())
.then(data => {
    fetchedData = data.data;
    console.log(data);
    data.data.forEach(dialog => {
        datalist.innerHTML += `<option value="${dialog.question}">`
    })
    // inputDialog
})

inputDialog.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        // console.log(fetchedData);
        console.log(inputDialog.value);
        fetchedData.forEach(dialog => {
            if(dialog.question === inputDialog.value){
                answer = dialog.answer;
                // console.log(answer);
            }
        })
        answerSec.innerHTML += `<a>${answer}</a>`;
        event.preventDefault();
    }
})