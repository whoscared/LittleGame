//Main part

//Открытие страницы, загрузка нового теста
window.onload = function() {
    setNewTest();
};

resultBtn.onclick = function() {
    let user1 = localStorage.getItem('currentUser');

    //localStorage.setItem('score', result_value);
    usersResults.push({ username: user1, result: result_value });


    var usersResultsJSON = JSON.stringify(usersResults);

    // Сохраняем строку JSON в localStorage
    localStorage.setItem('userResults', usersResultsJSON);

    localStorage.setItem('currentResult', result_value);
}


//Нажатие на кнопку - открытие следующего теста
nextText.onclick = function() {
    if (allQuestions[currentTest].readyQuestions[0] == false || 
        allQuestions[currentTest].readyQuestions[1] == false) {
            currentScore = 0;
            testLevel();
            if (currentTest == allTests.length - 1 && 
                (allQuestions[currentTest].readyQuestions[0] == true && 
                    allQuestions[currentTest].readyQuestions[1] == true)) {
                resultBtn.style.display = 'block';
                nextText.style.display = 'none';
            }
    } else {
        currentScore = 0;
        setNewTest();
    }
};

//Загрузка нового теста
function setNewTest() {

    //Переходим на следующий тест
    currentTest++;
    let currentTestObj = allTests[currentTest];

    //Делаем все тесты скрытыми
    for ( let i = 0; i < allTests.length; i++) {
        allTests[i].style.display = 'none';
    }

    //Делаем текущий тест видимым, если требуется flex
    currentTestObj.style.display = 'flex';

    if (currentTest == 0) {
        getRandomElements_Test1();
    }

    testLevel();

    //Помещаем текущее количество очков
    result.innerText = result_value;
};

function testLevel() {
    //Устанавливаем таймер
    timerElement.style.color = 'black';
    timerElement.innerText = '10';
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    
    //У игрока еще есть время
    haveTime = true;

    //Погасим кнопку
    nextText.disabled = true;

    let level = getRandomZeroOrOne();
    if (allQuestions[currentTest].readyQuestions[level] == true) {
        level = (level - 1) * (-1);
    }
    cuurentLevel = level;

    let currentQuestion = allQuestions[currentTest].questions[level];
    question.innerText = currentQuestion;

    allQuestions[currentTest].readyQuestions[level] = true;

    if (currentTest == 1) {
        getRandomElements_Test2();
        addEventListenerForClick_Test2();
    }

    if (currentTest == 2 && 
    (allQuestions[currentTest].readyQuestions[0] == true || allQuestions[currentTest].readyQuestions[1] == true)) {
        uploadImages();
    }

};

function nextTestActive() {
    nextText.disabled = false;
};


