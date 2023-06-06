
//Quiz questions
const questions = [
    {
        question: `Which is the largest country in the world?`,
        answers: [
            { text: 'Canada', correct: false },
            { text: 'China', correct: false },
            { text: 'Russia', correct: true },
        ]
    },
    {
        question: `What continent has the most countries?`,
        answers: [
            { text: 'Africa', correct: true },
            { text: 'Europe', correct: false },
            { text: 'Asia', correct: false },
        ]
    },
    {
        question: `What is the capital of Australia`,
        answers: [
            { text: 'Melbourne', correct: false },
            { text: 'Sidney', correct: false },
            { text: 'Canberra', correct: true },
        ]
    }

];

//Get elements from the DOM

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

//Start the quiz
function runGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

runGame();