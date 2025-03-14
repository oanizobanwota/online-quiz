// Questions
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
  {
    type: "multiple",
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  {
    type: "truefalse",
    question: "The Great Wall of China is visible from space.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    type: "fill",
    question: "The capital of Spain is ___",
    answer: "Madrid",
  },
  {
    type: "multiple",
    question: "What is the smallest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mercury"],
    answer: "Mercury",
  },
  {
    type: "multiple",
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    type: "multiple",
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    type: "fill",
    question: "The capital of Italy is ___",
    answer: "Rome",
  },
  {
    type: "multiple",
    question: "Which country won the first ever World Cup in 1930?",
    options: ["Brazil", "Argentina", "Uruguay", "Germany"],
    answer: "Uruguay",
  },
  {
    type: "multiple",
    question: "Which country has won the most World Cups?",
    options: ["Brazil", "Argentina", "Uruguay", "Germany"],
    answer: "Brazil",
  },
  {
    type: "multiple",
    question: "What is the name of Elon Musk's aerospace company?",
    options: ["Tesla", "SpaceX", "Google", "Amazon"],
    answer: "SpaceX",
  },
  {
    type: "multiple",
    question: "What year did the first Apple iPhone launch?",
    options: ["2005", "2006", "2007", "2008"],
    answer: "2007",
  },
  {
    type: "multiple",
    question: "Solar power generates electricity from what source?",
    options: ["Wind", "Water", "Sun", "Coal"],
    answer: "Sun",
  },
  {
    type: "multiple",
    question: "In what year was the first transatlantic radio broadcast?",
    options: ["1901", "1902", "1903", "1904"],
    answer: "1901",
  },
  {
    type: "truefalse",
    question: "Donald Trump is the 45th President of the United States.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    type: "multiple",
    question: "Who is the 47th President of the United States of America?",
    options: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
    answer: "Donald Trump",
  },
  {
    type: "multiple",
    question: "Nigeria/Biafra war was fought in which year?",
    options: ["1967-1970", "1968-1970", "1969-1970", "1970-1971"],
    answer: "1967-1970",
  },
  {
    type: "multiple",
    question: "Who is the current President of Nigeria?",
    options: [
      "Muhammadu Buhari",
      "Goodluck Jonathan",
      "Olusegun Obasanjo",
      "Bola Tinubu",
    ],
    answer: "Bola Tinubu",
  },
  {
    type: "multiple",
    question:
      "Who is the currently leading the agitation for a state of Biafra?",
    options: [
      "Nnamdi Kanu",
      "Rochas Okorocha",
      "Orji Uzor Kalu",
      "Ike Ekweremadu",
    ],
    answer: "Nnamdi Kanu",
  },
  {
    type: "multiple",
    question: "What is the full meaning of IPOB?",
    options: [
      "Igbo People of Biafra",
      "Indigenous People of Biafra",
      "Igbo People of Benin",
      "Indigenous People of Benin",
    ],
    answer: "Indigenous People of Biafra",
  },
  {
    type: "multiple",
    question: "What is the full meaning of NAFDAC?",
    options: [
      "National Agency for Food and Drug Administrative Center",
      "National Agency for Food and Drug Administration and Control",
      "Nigerian Agricultural Food and Drink Associate Company",
      "Namibia Agents for Free Drinks Association and Control",
    ],
    answer: "National Agency for Food and Drug Administration and Control",
  },
  {
    type: "fill",
    question: "London is the capital of ___",
    answer: "England",
  },
  {
    type: "multiple",
    question: "Who is the CEO of facebook?",
    options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Jeff Bezos"],
    answer: "Mark Zuckerberg",
  },
  {
    type: "truefalse",
    question: "Elon Musk is the CEO of Tesla and SpaceX.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    type: "truefalse",
    question: "The Ukraine is the largest country in the world.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    type: "multiple",
    question: "What country is the largest in the world?",
    options: ["Russia", "Canada", "China", "United States"],
    answer: "Russia",
  },
  {
    type: "fill",
    question: "England, Scotland, Wales and Northern Ireland make up the ___",
    answer: "United Kingdom",
  },
  {
    type: "truefalse",
    question: "The United Kingdom and Great Britain are the same thing.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    type: "multiple",
    question: "Which countries made up Great Britain?",
    options: [
      "England, Scotland, Wales",
      "England, Scotland, Ireland",
      "England, Wales, Ireland",
      "Scotland, Wales, Ireland",
    ],
    answer: "England, Scotland, Wales",
  },
  {
    type: "truefalse",
    question: "Is Nnamdi Kanu a citizen of United Kingdom?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    type: "fill",
    question: "The formula for oxygen is ___",
    answer: "O2",
  },
  {
    type: "multiple",
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
    answer: "Sahara",
  },
  {
    type: "truefalse",
    question: "Indigenous People of Biafra was founded in 2012.",
    options: ["True", "False"],
    answer: "True",
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
