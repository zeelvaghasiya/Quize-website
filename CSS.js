const quizDB = [
    {
        question: "Q1: CSS stands for:",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: `Q2: The CSS property used to control the element's font-size is-`,
        a: "text-style",
        b: "text-size",
        c: "font-size",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q3: The HTML attribute used to define the inline styles is -",
        a: "style",
        b: "styles",
        c: "class",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q4: The HTML attribute used to define the internal stylesheet is -",
        a: "<style>",
        b: "style",
        c: "<link>",
        d: "<script>",
        ans: "ans1"
    },
    {
        question: "Q5: The CSS property used to make the text bold is",
        a: "font-weight : bold",
        b: "weight: bold",
        c: "font: bold",
        d: "style: bold",
        ans: "ans1"
    },
    {
        question: "Q6: Are the negative values allowed in padding property?",
        a: "Yes",
        b: "No",
        c: "Can't say",
        d: "May be",
        ans: "ans2"
    },
    {
        question: "Q7: Which of the following is not a type of combinator?",
        a: ">",
        b: "~",
        c: "+",
        d: "*",
        ans: "ans4"
    },
    {
        question: "Q8: The correct syntax to give a line over text is",
        a: "text-decoration: line-through",
        b: "text-decoration: none",
        c: "text-decoration: overline",
        d: "text-decoration: underline",
        ans: "ans3"
    },
    {
        question: "Q9: Which if the following CSS function allows us to perform calculations?",
        a: "calc() function",
        b: "calculator() function",
        c: "calculate() function",
        d: "cal() function",
        ans: "ans1"
    },
    {
        question: "Q10: How many type of CSS?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans3"
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

