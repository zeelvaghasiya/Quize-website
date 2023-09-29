const quizDB = [
    {
        question: "Q1: PHP stands for -",
        a: "Hypertext Preprocessor",
        b: "Pretext Hypertext Preprocessor",
        c: "Personal Home Processor",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: `Q2: Who is known as the father of PHP?`,
        a: "Drek Kolkevi",
        b: "List Barely",
        c: "Rasmus Lerdrof",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q3: Variable name in PHP starts with -",
        a: "!",
        b: "$",
        c: "&",
        d: "#",
        ans: "ans2"
    },
    {
        question: "Q4: Which of the following is not a variable scope in PHP?",
        a: "Extern",
        b: "Local",
        c: "Static",
        d: "Global",
        ans: "ans1"
    },
    {
        question: "Q5: Which of the following is correct to add a comment in php?",
        a: "& …… &",
        b: "// ……",
        c: "/* …… */",
        d: "Both (b) and (c)",
        ans: "ans4"
    },
    {
        question: "Q6: Which of the following is used to display the output in PHP?",
        a: "echo",
        b: "write",
        c: "print",
        d: "Both (a) and (c)",
        ans: "ans4"
    },
    {
        question: "Q7: Which of the following is used for concatenation in PHP?",
        a: "+",
        b: "*",
        c: ".",
        d: "append",
        ans: "ans3"
    },
    {
        question: "Q8: What does PEAR stands for?",
        a: "PHP extension and application repository",
        b: "PHP enhancement and application reduce",
        c: "PHP event and application repository",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q9: Which of the following function is used to find files in PHP?",
        a: "glob()",
        b: "fold()",
        c: "file()",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q10: Which of the following variable name is invalid?",
        a: "$newVar",
        b: "$new_Var",
        c: "$new-var",
        d: "All of the above",
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

