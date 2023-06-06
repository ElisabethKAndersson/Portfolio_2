//Get elements from the DOM

const questions = document.getElementsByClassName('question');
const answerElement = document.getElementById('allButtons');
const nextButton = document.getElementById('next-button');


//Quiz questions
questions = [
    {
        question: `Which is the largest country in the world?`,
        answers: [
            { text: 'Canada', correctAnswer: false },
            { text: 'China', correctAnswer: false },
            { text: 'Russia', correctAnswer: true },
        ]
    },
    {
        question: `What continent has the most countries?`,
        answers: [
            { text: 'Africa', correctAnswer: true },
            { text: 'Europe', correctAnswer: false },
            { text: 'Asia', correctAnswer: false },
        ]
    },
    {
        question: `What is the capital of Australia`,
        answers: [
            { text: 'Melbourne', correctAnswer: false },
            { text: 'Sidney', correctAnswer: false },
            { text: 'Canberra', correctAnswer: true },
        ]
    };

    let currentQuestionIndex = 0;
    let score = 0;

    function runGame() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    };

    function showQuestion() {
        let currentQuestion = questions[currentQuestionIndex];
        let questionNumber = currentQuestionIndex + 1;
        questions.innerHTML = questionNumber + "." + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("button");
            answerElement.appendChild(button);
        });
    }

    runGame();