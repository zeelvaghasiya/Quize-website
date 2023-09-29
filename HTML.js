const quizDB = [
    {
        question: "Q1: HTML stands for",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "ans3"
    },
    {
        question: `Q2: The correct sequence of HTML tags for starting a webpage is -`,
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following tag is used to insert a line-break in HTML?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans: "ans1"
    },
    {
        question: "Q4: How to insert an image in HTML?",
        a: `<img href = "jtp.png" />`,
        b: `<img url = "jtp.png" />`,
        c: `<img link = "jtp.png" />`,
        d: `<img src = "jtp.png" />`,
        ans: "ans4"
    },
    {
        question: "Q5: <input> is -",
        a: "a format tag.",
        b: "an empty tag.",
        c: "All of the above",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q6: How to create a checkbox in HTML?",
        a: `<input type = "checkbox">`,
        b: `<input type = "button">`,
        c: "<checkbox>",
        d: `<input type = "check">`,
        ans: "ans1"
    },
    {
        question: "Q7: Which of the following tag is used to add rows in the table?",
        a: "<td> and </td>",
        b: "<th> and </th>",
        c: "<tr> and </tr>",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q8: The <hr> tag in HTML is used for",
        a: "new line",
        b: "vertical ruler",
        c: "new paragraph",
        d: "horizontal ruler",
        ans: "ans4"
    },
    {
        question: "Q9: Which of the following is the paragraph tag in HTML?",
        a: "<p>",
        b: "<b>",
        c: "<pre>",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q10: A program in HTML can be rendered and read by",
        a: "Web browser",
        b: "Server",
        c: "Interpreter",
        d: "None of the above",
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

