const questions = [

    {
        question: "Who Made This Quiz",
        answers:
            [
                { text: "Rishikesh", correct: true },
                { text: "Bill Gates", correct: false },
                { text: "Elon Musk", correct: false },
                { text: "Ambani", correct: false }
            ]
    },
    {
        question: "Which of the following is not a javascript framework",
        answers:
            [
                { text: "React Js", correct: false },
                { text: "Vue Js", correct: false },
                { text: "Lexi Js", correct: true },
                { text: "Angular Js", correct: false }
            ]
    },
    {
        question: "What is 0111 in decimal",
        answers:
            [
                { text: "3", correct: false },
                { text: "7", correct: true },
                { text: "10", correct: false },
                { text: "5", correct: false }
            ]
    }

]

let currentquestionindex = 0;
let score = 0
const questionname = document.querySelector(".question")
const answerbuttons = document.querySelector(".answerbuttons")
const next = document.querySelector(".next-btn")

function startquiz() {
    reset()
    currentquestionindex = 0
    score = 0
    showquestion();
}

function showquestion() {
    reset()
    let currentquestion = questions[currentquestionindex]
    let questionno = currentquestionindex + 1;

    questionname.innerHTML = questionno + "." + currentquestion.question

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerbuttons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectanswer)
    })
}

function selectanswer(e) {
    const selectbtn = e.target
    const iscorrect = selectbtn.dataset.correct === "true"

    if (iscorrect) {
        selectbtn.classList.add("correct")
        score++
        if (currentquestionindex == 2) {
            alert("THALA FOR A REASON 🗿")
        }
    }
    else {
        selectbtn.classList.add("wrong")
    }

    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        else{
            button.classList.add("wrong")
        }
        button.disabled = true;
    })
    next.style.display = "flex"
}

function showscore() {
    reset()
    questionname.innerHTML += `You Scored ${score} out of ${questions.length}`
    next.style.display = "flex"
    next.innerHTML = "Play Again"

}

function handlenext() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion();
    }
    else {
        showscore()
    }
}

next.addEventListener("click", () => {

    if (currentquestionindex < questions.length) {
        handlenext()
    }
    else {
        startquiz();
    }
})

function reset() {
    next.style.display = ""
    questionname.innerHTML = ""
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}

startquiz();

