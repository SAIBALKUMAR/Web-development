const quizData = [{
 question:"What is the capital of Karnataka?",
 a:'Mysore',
 b:'Bengaluru',
 c:'Hyderabad',
 d:'NOTA',
 correct:'b',
},{
 question:"What is the capital of India?",
 a:'New Delhi',
 b:'Mumbai',
 c:'Benaluru',
 d:'NOTA',
 correct:'a',
},{
 question:"What is the capital of USA?",
 a:'Washington DC',
 b:'New York',
 c:'Los Angeles',
 d:'NOTA',
 correct:'a',
},{
 question:"What is the capital of Germany?",
 a:'Berlin',
 b:'Munich',
 c:'Stuttgart',
 d:'NOTA',
 correct:'a',
}];
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const quiz =    document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;



function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();
function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if ( currentQuiz < quizData.length){
            loadQuiz();

        }else {
            quiz.innerHTML =`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
            <button onclick="location.reload()">Reload</button>`
        }
        
    }
});