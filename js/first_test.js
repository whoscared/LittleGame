function getRandomElements_Test1() {
    let test1Images = document.getElementById('test-1-imgs');
    test1Images.innerHTML = '';

    let crocoSample = '<img class="croco" id="croco-';
    let monkeySample = '<img class="monkey" id="monkey-';

    let crocoImages = ['" src="./img/test1/croco-1.gif">',
    '" src="./img/test1/croco-2.png">',
    '" src="./img/test1/croco-3.gif">',
    '" src="./img/test1/croco-4.png">',
    '" src="./img/test1/croco-5.png">',
    '" src="./img/test1/croco-6.png">',
    '" src="./img/test1/croco-7.png">'];

    let monkeyImages = ['" src="./img/test1/monkey-1.png">',
    '" src="./img/test1/monkey-2.png">',
    '" src="./img/test1/monkey-3.png">',
    '" src="./img/test1/monkey-4.png">',
    '" src="./img/test1/monkey-5.png">',
    '" src="./img/test1/monkey-6.png">',
    '" src="./img/test1/monkey-7.png">'];

    const availableStringsCroco = crocoImages.slice();
    const availableStringsMonkey = monkeyImages.slice();

    let i = 1;
    let crocoResult = '';
    let monkeyResult = '';
    while (i < 4) {
        const randomIndexCroco = Math.floor(Math.random() * availableStringsCroco.length);
        const randomIndexMonkey = Math.floor(Math.random() * availableStringsMonkey.length);

        const randomStringCroco = availableStringsCroco[randomIndexCroco];
        const randomStringMonkey = availableStringsMonkey[randomIndexMonkey];

        crocoResult += crocoSample + i + randomStringCroco + ' ';
        monkeyResult += monkeySample + i + randomStringMonkey + ' ';

        availableStringsCroco.splice(randomIndexCroco, 1);
        availableStringsMonkey.splice(randomIndexMonkey, 1);

        i++;
    }

    let resultAllImages = crocoResult + ' ' + monkeyResult;
    test1Images.innerHTML = `${resultAllImages}`;

    let j = 1;
    while (j < 4) {
        let curCroco = document.getElementById('croco-' + j);
        let curMonkey = document.getElementById('monkey-' + j);

        curCroco.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        curCroco.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 100  + 'px';

        curMonkey.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        curMonkey.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 100  + 'px';

        j++;
    }
  };

  //Drop с фиксацией позиции за мышкой
function dragDrop_0(event) {
    // Отменяем действия браузера по умолчанию
    event.preventDefault();
    
    // Если элемент, который мы "роняем" это наш переносимый элемент
    if (draggableElement) {
        draggableElement.style.left = event.pageX - 100 + 'px';
        draggableElement.style.top = event.pageY - 100 + 'px';

      //Добавляем элемент в новый блок
      firstPound.appendChild(draggableElement);
    }

    if (draggableElement.classList.contains('monkey') && cuurentLevel == 0
    && !(draggableElement.classList.contains('ready'))) {
        draggableElement.classList.add('ready');
        addScopeCount();
    }
};

//Drop с фиксацией позиции за мышкой
function dragDrop_1(event) {
    // Отменяем действия браузера по умолчанию
    event.preventDefault();
    
    // Если элемент, который мы "роняем" это наш переносимый элемент
    if (draggableElement) {
        draggableElement.style.left = event.pageX - 100 + 'px';
        draggableElement.style.top = event.pageY - 100 + 'px';

      //Добавляем элемент в новый блок
      firstPound.appendChild(draggableElement);
    }

    if (draggableElement.classList.contains('croco') && cuurentLevel == 1
    && !(draggableElement.classList.contains('ready'))) {
        draggableElement.classList.add('ready');
        addScopeCount();
    }
};

