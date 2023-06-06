// DOM Elements

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("button");
}
const question = document.getElementsByClass("question");
const alternativeButtons = document.getElementById(AllButtons);




// Questions

const questions = [
    {
        id: "0"
        question: `Which is the largest country in the world?`,
        answers: ['Canada', 'China', 'Russia'],
        correctAnswer: 'Russia',
    }
    {
        id: "1"
        question: `What continent has the most countries?`,
        answers: ['Africa', 'Europe', 'Asia'],
        correctAnswer: 'Africa',
    }
    {
        id: "2"
        question: `What is the capital of Australia`,
        answers: ['Melbourne', 'Sydney', 'Canberra'],
        correctAnswer: 'Canberra',
    }
];




function runGame();