
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqnZeeTFoNd_qFm5SLp_thLEoPeMDeIk",
  authDomain: "facebooksign-9b876.firebaseapp.com",
  databaseURL: "https://facebooksign-9b876-default-rtdb.firebaseio.com",
  projectId: "facebooksign-9b876",
  storageBucket: "facebooksign-9b876.appspot.com",
  messagingSenderId: "428760882569",
  appId: "1:428760882569:web:1548a1a4a2f459202c1558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()

function getDataFromDatabase(){
    const reference = ref(db,'questions/')
    onChildAdded(reference,function(data){
        console.log(data.val())
        questions.push(data.val())
        showQuestion()
    })
}
getDataFromDatabase()














var questions = [];




function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome-form"]["name"].value;
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
    console.log(name);
}
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var questionelem = document.getElementById("questionelem");
var optionElem = document.getElementById("optionElem");


var indexNum = 0;
var score = 0;
window.checkQuestion = function(a,b){
    if(a==b){
      score++
      console.log('score')
    }
    nextQues() 
}
window.nextQues = function(){
    
    indexNum++
    showQuestion()
    
 }

function showQuestion(){
    currentQuestion.innerHTML = indexNum + 1;
    totalQuestion.innerHTML = questions.length;
    
    var obj = questions[indexNum];
    // questionelem.innerHTML = obj.question;

    
    optionElem.innerHTML = ""
    for(var i = 0; i<obj.options.length; i++){
        
        optionElem.innerHTML += `<div class="col-md-4">
        <div class="py-2">
          <button onclick ="checkQuestion('${obj.options[i]}','${obj.answer}')" class="btn btn-success rounded-pill w-100">
          ${obj.options[i]}
          </button>
        </div>
      </div>
    </div>` 

    }
   

}
 


showQuestion()



