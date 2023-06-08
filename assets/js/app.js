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
})

inputDialog.addEventListener("keydown", function(event){
    answer = undefined;
    if(event.code === "Enter"){
        console.log(inputDialog.value);
        fetchedData.forEach(dialog => {
            if(dialog.question === inputDialog.value){
                answer = dialog.answer;
            }
        })
        answerSec.innerHTML += `<div class="bubble left mt-4">${inputDialog.value}</div>`;
        setTimeout(function(){
            if (answer != undefined){
                answerSec.innerHTML += `<div class="bubble right mt-4 mb-2">${answer}</div>`;
            }
            else{
                answerSec.innerHTML += `<div class="bubble right mt-4 mb-2">Je ne connais pas cette question, voulez vous <a href="features/addchat.html">me l'apprendre</a> ?</div>`;
            }
        },800);
        event.preventDefault();
    }
})