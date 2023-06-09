/*The quiz is made with the help of this tutorial https://www.youtube.com/watch?v=PBcqGxrr9g8
and modified to fit my vision */

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
    },
    {
        question: `Which country has the smallest population?`,
        answers: [
            { text: 'Iceland', correct: false },
            { text: 'Vatican City', correct: true },
            { text: 'Nauru', correct: false },
        ]
    },
    {
        question: `Which is the southernmost city in the world?`,
        answers: [
            { text: 'Melbourne', correct: false },
            { text: 'Lesotho', correct: false },
            { text: 'Ushuaia', correct: true },
        ]
    },
    {
        question: `Which is the biggest ocean in the world?`,
        answers: [
            { text: 'Pacific Ocean', correct: true },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
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

//Question and answers
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//Parameters for correct/incorrect answers
function selectAnswer(i) {
    const selectedBtn = i.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//Score when quiz is finished
function showScore() {
    resetState();
    questionElement.innerHTML = `Score: ${score
        } `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


//Next-button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        runGame();
    }
});

runGame();