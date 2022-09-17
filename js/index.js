const qesDb = [
    {
        question: "Q1: What is part of a database that holds only one type of information?",
        a: "Report",
        b: "Field",
        c: "Record",
        d: "File",
        ans: "ans2"
    }, {
        question: "Q2: Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
        a: "Flash",
        b: "Flange",
        c: "Fury",
        d: "FRAM",
        ans: "ans1"
    }, {
        question: "Q3: \'OS\' computer abbreviation usually means ?",
        a: "Order of Significance",
        b: "Open Software",
        c: "Operating System",
        d: "Optical Sensor",
        ans: "ans3"
    }, {
        question: "Q4: Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?",
        a: "Alan Turing",
        b: "George Boole",
        c: "Charles Babbage",
        d: "Steve Jobs",
        ans: "ans1"
    },
    {
        question: "Q5: The most common format for a home video recorder is VHS. VHS stands for...?",
        a: "Voltage house standard",
        b: "Video horizontal standard",
        c: "Very high speed",
        d: "Video Home System",
        ans: "ans4"
    }
];

const qes = document.querySelector(".question");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const sub = document.getElementById("submit")
const scoreCard = document.querySelector(".scoreArea");
let again;

let counter;
let score;

function clear() {
    counter = 0;
    score = 0;
}

function nqes() {
    qes.innerText = qesDb[counter].question;
    op1.innerText = qesDb[counter].a;
    op2.innerText = qesDb[counter].b;
    op3.innerText = qesDb[counter].c;
    op4.innerText = qesDb[counter].d;
}

clear();
nqes();

sub.addEventListener('click', () => {
    console.log(counter);
    console.log(score);
    const check = document.querySelector('input[name="answer"]:checked');
    if (check === null) {
        alert("Select an option!!!")
    }
    else {
        if (check.id == qesDb[counter].ans) {
            check.checked = false;
            score++;
        }
        counter++;
        if (counter < qesDb.length) {
            check.checked = false;
            nqes();
        } else {
            scoreCard.innerHTML = `Score : ${score}/${qesDb.length}<button id="again">Play Again</button>`;
            scoreCard.style.display = "block";
            again = document.getElementById("again");
            again.addEventListener('click', () => {
                clear();
                scoreCard.style.display = "none";
                nqes();
            });
        }
    }
});