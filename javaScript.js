const quizDB = [
    {
        question: "Q1: Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    },
    {
        question: `Q2: The "function" and " var" are known as:`,
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following type of a variable is volatile?",
        a: "Mutable variable",
        b: "Dynamic variable",
        c: "Volatile variable",
        d: "Immutable variable",
        ans: "ans1"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenSheos",
        ans: "ans1"
    },
    {
        question: "Q5: In JavaScript, what kind of scoping is used?",
        a: "Literal scoping",
        b: "Sequential scoping",
        c: "Segmental scoping",
        d: "Lexical scoping",
        ans: "ans4"
    },
    {
        question: "Q6: If a function which does not return a value is known as _____",
        a: "Static function",
        b: "Procedures",
        c: "Method",
        d: "Dynamic function",
        ans: "ans2"
    },
    {
        question: "Q7: Which one of the following is not a keyword:",
        a: "if",
        b: "with",
        c: "debugger",
        d: "use strict",
        ans: "ans4"
    },
    {
        question: "Q8: If both values are undefined and both are null, they are Equal.",
        a: "False True",
        b: "False False",
        c: "True False",
        d: "True True",
        ans: "ans1"
    },
    {
        question: "Q9: Which one of the following operator returns false if both values are equal?",
        a: "!",
        b: "!=",
        c: "!==",
        d: "All of the above",
        ans: "ans2"
    },
    {
        question: "Q10: Which one of the following is an ternary operator:",
        a: "?",
        b: ":",
        c: "+",
        d: "%",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {

    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    })
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    deselectAll();

    questionCount++;

    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} 🤞 </h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
        const startit = () => {
            setTimeout(function () {
                console.log("start");
                confetti.start();
            }, 1000);
        };
        
        const stopit = () => {
            setTimeout(function () {
                console.log("stop");
                confetti.stop();
            }, 6000);
        };
        
        startit();
        stopit();
    }
})

