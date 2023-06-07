/*This quiz has been made with support of following tutorial: 
https://www.codingninjas.com/codestudio/library/how-to-create-a-javascript-quiz-code */


//Get Elements from DOM
const nextBtn = getElementById = ('next-button');
const submitBtn = getElementsById = ('submit-button');
const restartBtn = getElementById = ('restart-button');
const trueBtn = getElementById = ('true');
const falseBtn = getElementById = ('false');
const userScore = getElementById = ('user-score');
const questionText = getElementById = ('question-text');

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: `Russia is the largest country in the world.`,
        answers: [
            { option: 'TRUE', answer: true },
            { option: 'FALSE', answer: false }
        ]
    },
    {
        question: `Europe is the continent with the most countries.`,
        answers: [
            { option: 'TRUE', answer: false },
            { option: 'FALSE', answer: true }
        ]
    },
    {
        question: `Sydney is the Capital of Australia.`,
        answers: [
            { option: 'TRUE', answer: false },
            { option: 'FALSE', answer: true }
        ]
    }
]

// EventListerners

restartBtn.addEventListener('click', restart);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);

//Game starter with true/false button parameters
function runGame() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano = 0;
        if (questions[currentQuestion].answers[ano].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    };
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano = 1;
        if (questions[currentQuestion].answers[ano].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }
}
runGame();

//reset at gamestart
function restart() {
    currentQuestion = 0;
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    runGame();
}