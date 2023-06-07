/*This quiz has been made with support of following tutorial: 
https://www.codingninjas.com/codestudio/library/how-to-create-a-javascript-quiz-code */

const allQuestions = [
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
    },

    {
        question: `What is the capital of Australia?`,
        answers: {
            a: 'Melbourne',
            b: 'Sidney',
            c: 'Canberra';
        },
        correctAnswer: 'c';
    }
];

//Get Elements from DOM
const nextBtn = getElementById = ('next-button');
const submitBtn = getElementsById = ('submit-button');
const restartBtn = getElementById = ('restart-button');
const trueBtn = getElementById = ('true');
const falseBtn = getElementById = ('false');
const userScore = getElementById = ('user - score');
const questionText = getElementById = ('question');

let currentQuestion = 0;
let score = 0;

