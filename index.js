const quizDB = [
  {
    question: "Q1:'OS' Computer abbreviation usually means ?",
    A: "Order of Significance",
    B: "Open Software",
    C: "Operating System",
    D: "Optical Sensor",
    ans: "ans3"
  },
  {
    question: "Q2:'.MOV' extension refers usually to what kind of file?",
    A: "Image file",
    B: "Animation/movie file",
    C: "Audio file",
    D: "MS Office document",
    ans: "ans2"
  },
  {
    question: "Q3: Who developed Yahoo?",
    A: "Dennis Ritchie & Ken Thompson",
    B: "David Filo & Jerry Yang",
    C: "	Vint Cerf & Robert Kahn",
    D: "	Steve Case & Jeff Bezos",
    ans: "ans2"
  },
  {
    question: "Q4:'DB' computer abbreviation usually means ?",
    A: "Database",
    B: "Double Byte",
    C: "Data Block",
    D: "Driver Boot",
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

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

  const questionList = quizDB[questionCount];

  question.innerHTML = questionList.question;

  option1.innerHTML = questionList.A;
  option2.innerHTML = questionList.B;
  option3.innerHTML = questionList.C;
  option4.innerHTML = questionList.D;
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
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  };
  questionCount++;

  deselectAll();

  if (
    questionCount < quizDB.length
  ) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <h3> You Score ${score}/${quizDB.length} ✌️</h3>
    <button class="btn" onclick="location.reload()"> Play Again</button>
    `;

    showScore.classList.remove('scoreArea');

  }
});