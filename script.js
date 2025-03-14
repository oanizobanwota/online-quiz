// Sample questions (you can add more)
const questions = [
  {
    type: "multiple",
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    type: "truefalse",
    question: "JavaScript is a compiled language.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    type: "fill",
    question: "The chemical symbol for water is ___",
    answer: "H2O",
  },
];

let currentQuestion = 0;
let userAnswers = [];
let shuffledQuestions = [];

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Initialize quiz
function init() {
  // Shuffle questions
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  userAnswers = new Array(shuffledQuestions.length).fill(null);
  currentQuestion = 0;
  loadQuestion();
}

// Load current question
function loadQuestion() {
  const question = shuffledQuestions[currentQuestion];
  questionEl.textContent = question.question;
  optionsEl.innerHTML = "";

  // Update navigation buttons
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.style.display =
    currentQuestion === shuffledQuestions.length - 1 ? "none" : "block";
  submitBtn.style.display =
    currentQuestion === shuffledQuestions.length - 1 ? "block" : "none";

  // Render question based on type
  switch (question.type) {
    case "multiple":
    case "truefalse":
      question.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = option;
        div.onclick = () => selectOption(index, option);
        if (userAnswers[currentQuestion] === option) {
          div.classList.add("selected");
        }
        optionsEl.appendChild(div);
      });
      break;
    case "fill":
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type your answer here";
      if (userAnswers[currentQuestion]) {
        input.value = userAnswers[currentQuestion];
      }
      input.oninput = (e) => {
        userAnswers[currentQuestion] = e.target.value;
      };
      optionsEl.appendChild(input);
      break;
  }
}

// Select option for multiple choice and true/false
function selectOption(index, option) {
  userAnswers[currentQuestion] = option;
  loadQuestion();
}

// Navigation
prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

nextBtn.onclick = () => {
  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
};

submitBtn.onclick = showResults;

restartBtn.onclick = () => {
  resultEl.style.display = "none";
  quizEl.style.display = "block";
  init();
};

// Calculate and show results
function showResults() {
  let score = 0;
  shuffledQuestions.forEach((question, index) => {
    if (
      userAnswers[index] &&
      userAnswers[index].toLowerCase() === question.answer.toLowerCase()
    ) {
      score++;
    }
  });

  quizEl.style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = `You scored ${score} out of ${
    shuffledQuestions.length
  } (${((score / shuffledQuestions.length) * 100).toFixed(2)}%)`;
}

// Start the quiz
init();
