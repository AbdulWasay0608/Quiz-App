 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase, set, ref, push} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBB5sbqHBdctTB95SL1z8qzh85zGcYjLDw",
   authDomain: "quiz-app-0608.firebaseapp.com",
   projectId: "quiz-app-0608",
   storageBucket: "quiz-app-0608.appspot.com",
   messagingSenderId: "1034250979738",
   appId: "1:1034250979738:web:ebc658a7438d7215205223",
   measurementId: "G-1EDX8DCKCL"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()


 var Questions = document.getElementById('question ')
 var option = document.getElementById('option')
 var optParent = document.getElementById('optParent')
 var correctAnswer = document.getElementById('correctAns')

var arr = []
var correctAns = 
window.renderOpt = function() {
// function renderOpt() {
    optParent.innerHTML = ""
    for(var i = 0; i<arr.length; i++){
        optParent.innerHTML += `<li onclick = "setCorrectAns('${arr[i]}')" class = "text-white p-2 bg-dark fs-5 rounded shadow my-2" >${arr[i]}</li>`
    }
}

 window.addOpt = function () {
    arr.push(option.value)
    option.value = ""
    renderOpt()
 }


 window.setCorrectAns = function(a) {
    correctAns = a
    correctAnswer.innerHTML = correctAns

 }

 
 
 
 window.submitQue = function() {
     
     var obj = {
         options: arr,
         correctAnswer: correctAns,
         question: Questions.value
         }

         obj.id = push(ref(db, 'qustions/')).key

const reference = ref(db, `questions/${obj.id}`)
set(reference, obj)

Questions.value = ""

optParent.innerHTML = ""

correctAnswer.innerHTML = ""


 }