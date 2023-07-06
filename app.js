

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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
 const db = getDatabase();


function getData() {
    const reference = ref(db, 'questions/')
    onChildAdded(reference, function(data) {
        questions.push(data.val())
        renderQuestion()
    } )
}

getData()


var questions= []



    var currentQuestion = document.getElementById('currentQuestion')
    var totalQuestion = document.getElementById('totalQuestion')
    var que = document.getElementById('question')
    var ans = document.getElementById('answer')

    var indexVal = 0
    var score = 0


    function renderQuestion() {

        currentQuestion.innerHTML = indexVal + 1
        totalQuestion.innerHTML = questions.length
    var obj = questions[indexVal]
        que.innerHTML = obj.question
        ans.innerHTML = ""
        for( var i = 0; i<obj.options.length; i++ ){
            ans.innerHTML += `<div class="col-md-6">
            <div class="py-2">
            <button  onclick="checkQue('${obj.options[i]}', '${obj.correctAnswer}')"  class="btn btn-secondary fs-5 rounded-pill w-100">
            ${obj.options[i]}
            </button>
            </div>
            </div>`
        }

    }
    renderQuestion()

    window.nextQue = function() {

        if ( indexVal + 1 == questions.length ){
            alert("Your Score Is " + score)
        }
else{
    indexVal++
    renderQuestion()
}
        indexVal++
        renderQuestion()
    }

    window.checkQue = function(a, b) {
        if (a == b){
            score++
        }


        nextQue()
    }