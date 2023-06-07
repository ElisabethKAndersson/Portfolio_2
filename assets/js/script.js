const allQuestions = [
    {
        question: `Which is the largest country in the world?`,
        answers: {
            a: 'Canada',
            b: 'China',
            c: 'Russia'
        },
        correctAnswer: 'c'
    },
    {
        question: `What continent has the most countries?`,
        answers: {
            a: 'Africa',
            b: 'Europe',
            c: 'Asia'
        },
        correctAnswer: 'a'
    },
    {
        question: `What is the capital of Australia?`,
        answers: {
            a: 'Melbourne',
            b: 'Sidney',
            c: 'Canberra'
        },
        correctAnswer: 'c'
    }
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        let output = [];
        let answers;

        for (let i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

}
showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer) {
    // code will go here
}

// show the questions
showQuestions(questions, quizContainer);

// when user clicks submit, show results
submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
};
const; 