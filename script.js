const questions = [
    {
        question: "Which is the best operating system?",
        answers: [
            { text: "Windows", correct:false},
            { text: "Linux Operating System", correct:true},
            { text: "Apple macOS", correct:false},
            { text: "Apple iOS", correct:false},
        ] 
    },
    {
        question: "Which is not a text editor",
        answers: [
            { text: "Vs code", correct:false},
            { text: "Sublime text", correct:false},
            { text: "Espresso", correct:false},
            { text: "Chrome", correct:true},
        ]   
    },
    {
        question: "Which is a computer hardware?",
        answers: [
            { text: "C.P.U", correct:true},
            { text: "Microsoft word", correct:false},
            { text: "Xammp", correct:false},
            { text: "Microsoft excel", correct:false},
        ]
    },
    {
        question: "Which is not a programming langauge?",
        answers: [
            { text: "Javascript", correct:false},
            { text: "HTML", correct:false},
            { text: "CSS", correct:false},
            { text: "Database", correct:true},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Redo Test"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=>{
 if(currentQuestionIndex < questions.length){
    handleNextButton();
 } else{
    startQuiz();
 }  
})

startQuiz();

let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML =(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)

