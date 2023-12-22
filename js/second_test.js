function getRandomElements_Test2() {
    secondTest.innerHTML = ' ';

        let secondTestItems = ['<img id="wathermelon" class="withA food test-2-item" " src="./img/test2/wathermelon.png">', 
        '<img id="guava" class="food test-2-item" src="./img/test2/guava.png">', 
        '<img id="croissant" class="food test-2-item"  src="./img/test2/croissant.png">',
        '<img id="bus"class="withA test-2-item" src="./img/test2/bus.png">',
        '<img id="orange" class="food withA test-2-item" src="./img/test2/orange.png">',
        '<img id="pineapple" class="food withA test-2-item" src="./img/test2/pineapple.png">',
        '<img id="pumpkin" class="food test-2-item" src="./img/test2/pumpkin.png">',
        '<img id="shark" class="withA test-2-item"  src="./img/test2/shark.png">',
        '<img id="donut" class="food test-2-item"  src="./img/test2/donut.png">',
        '<img id="gummy" class="food test-2-item"  src="./img/test2/gummy.png">',
        '<img id="melon" class="food test-2-item"  src="./img/test2/donut.png">',
        '<img id="pizza" class="food test-2-item"  src="./img/test2/pizza.png">',
        '<img id="starfish" class=" test-2-item"  src="./img/test2/starfish.png">',
        '<img id="sun" class="test-2-item"  src="./img/test2/sun.png">'];

        let randomGenerateArray = getRandomObjectsLevel2(secondTestItems);
        
        let resultCurrentItems = '';
        randomGenerateArray.forEach((string) => {
            resultCurrentItems+=string;
            resultCurrentItems += ' ';
          });
          
        secondTest.innerHTML = `${resultCurrentItems}`;
};

function addEventListenerForClick_Test2() {

    var elements = document.querySelectorAll('img.test-2-item');
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            element.style.display = 'none';
        });
    });

    var elements = document.querySelectorAll('img.withA');
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            if (!(element.classList.contains('one_click_0')) && cuurentLevel == 0) {       
                element.classList.add('one_click_0');
                addScopeCount();
            }
        });
    });

    var elements = document.querySelectorAll('img.food');
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            if (!(element.classList.contains('one_click_1')) && cuurentLevel == 1) {
                element.classList.add('one_click_1');
                addScopeCount();
            }
        });
    });
};

function getRandomObjectsLevel2(stringsArray) {
    const num = 8;
    const classLevel0 = 'withA';
    const classLevel1 = 'food';

    const countRightLvl = maxScoreOnTests[1][cuurentLevel];
    let curCount = 0;
    
    const randomStrings = [];
    
    // Создаем копию исходного массива
    const availableStrings = stringsArray.slice();

    let i = 0;
    while (i < num) {
        // Генерируем случайный индекс в оставшемся массиве доступных строк
        const randomIndex = Math.floor(Math.random() * availableStrings.length);

        // Получаем строку с соответствующим случайным индексом
        const randomString = availableStrings[randomIndex];

        if (curCount == countRightLvl) {

            if (containClass(randomString, classLevel0) && cuurentLevel == 0) {
                continue;
            }
            if (containClass(randomString, classLevel1) && cuurentLevel == 1) {
                continue;
            }

            // Добавляем выбранную строку в результирующий массив
            randomStrings.push(randomString);
      
            // Удаляем выбранную строку из массива доступных строк
            availableStrings.splice(randomIndex, 1);
            
            i+=1;
            continue;
        } else {
            if ((containClass(randomString, classLevel0)) && cuurentLevel == 0) {
                // Добавляем выбранную строку в результирующий массив
                randomStrings.push(randomString);
      
                // Удаляем выбранную строку из массива доступных строк
                availableStrings.splice(randomIndex, 1);
            
                i+=1;
                curCount+=1;
                continue;
            } 
            if ((containClass(randomString, classLevel1)) && cuurentLevel == 1) {
                // Добавляем выбранную строку в результирующий массив
                randomStrings.push(randomString);
      
                // Удаляем выбранную строку из массива доступных строк
                availableStrings.splice(randomIndex, 1);
            
                i++;
                curCount++;
                continue;
            } 
            continue;
        }
    }
    return randomStrings;
};

function containClass(obj, class_str) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = obj;

    // Ищем <img> элемент внутри временного элемента-контейнера
    const imgElement = tempElement.querySelector('img');

    // Проверяем, содержит ли <img> элемент класс 'food'
    return imgElement.classList.contains(class_str);
};