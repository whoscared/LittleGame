let firstPound = document.getElementById('pound');
let score = document.getElementById('score');
let question = document.getElementById('question');
let nextText = document.getElementById('next-test');
let timerElement = document.getElementById('timer');
let resultEnd = document.getElementById('result');
let navbar = document.getElementById('navbar');
let body = document.getElementById('body');
let usernameInput = document.getElementById('username');
let resultBtn = document.getElementById('result-form');
let resultTable = document.getElementById('result_table');

let firstTest = document.getElementById('test-1');
let secondTest = document.getElementById('test-2');
let thirdTest = document.getElementById('test-3');

let allTests = [firstTest, secondTest, thirdTest];

let testIsFlex = [false, true, true];
let allQuestions = [
    {
        id : 0,
        questions: ["Перетащите всех обезьянок на пальмы", "Перетащите всех крокодилов в водоем"],
        readyQuestions: [false, false]
    },
    {
        id : 1,
        questions: ["Найдите все объекты на букву А", "Найдите все съедобные объекты"],
        readyQuestions: [false, false]
    },
    {
        id : 2,
        questions: ["Перенесите все слова, начинающиеся с гласной в красный контейнер, с согласной - в синий",
        "Перенесите все слова женского рода в красный контейнер, мужского - в синий"],
        readyQuestions: [false, false]
    }
];

let currentTest = -1;
let cuurentLevel = 0;
let maxScoreOnTests = [[3,3],[5,6],[8,8]];
let testCounter = 0;
let result_value = 0;
let timerInterval;
let haveTime = true;
let playerResults = [0,0,0];
let currentScore = 0;

var usersResultsJSON = localStorage.getItem('userResults');
var usersResults = usersResultsJSON ? JSON.parse(usersResultsJSON) : [];

function addScopeCount() {
    if (haveTime){
        result_value++;
        score.innerText = result_value;
        currentScore++;
        if (currentScore == maxScoreOnTests[currentTest][cuurentLevel]) {
            nextTestActive();
        }
    }
};

//Обновление таймера
function updateTimer() {
    let time = parseInt(timerElement.innerText);

    // Уменьшаем значение таймера на 1
    time -= 1;
    timerElement.innerText = time;

    // Проверяем, если время истекло, останавливаем таймер
    if (time <= 0) {
      clearInterval(timerInterval);
      nextText.disabled = false;
      timerElement.innerText = 'Время вышло!';
      timerElement.style.color = '#b61d1d';

      //Также меняем значение флага на false, чтобы более не прибавлять очки 
      haveTime = false;
    }
};

function getRandomZeroOrOne() {
    return Math.round(Math.random());
}

//Перенос элементов 
function dragEnd() {
    // Удаляем элемент, который мы уже переснесли с его предыдущего места
    draggableElement = null;
};

  
//Без обработки этого действия наши перетаскиваемые элементы не появятся в "новом" блоке
function dragOver(event) {
    // Отменяем действия браузера по умолчанию
    event.preventDefault();
};

function dragStart(event) {
    // Получаем элемент, который будем перетаскивать
    draggableElement = event.target;
    event.dataTransfer.setData('text/plain', draggableElement.textContent);
};