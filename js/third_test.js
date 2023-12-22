function uploadImages() {
    thirdTest.innerHTML= ` <div class="section" id="section-1" ondragstart="dragStart(event)" ondragover="dragOver(event)" ondrop="dragDropWord(event)">
            
    </div>
    <div class="section" id="section-2">
        <img id="game" class="test-3-item red_0 red_1" src="./img/test3/game.png">
        <img id="chocolate" class="test-3-item blue_0 blue_1" src="./img/test3/chocolate.png">
        <img id="hedgehog" class="test-3-item red_0 blue_1" src="./img/test3/hedgehog.png">
        <img id="hot" class="test-3-item blue_0 red_1" src="./img/test3/hot.png">
        <img id="iod" class="test-3-item blue_0 blue_1" src="./img/test3/iod.png">
        <img id="island" class="test-3-item red_0 blue_1" src="./img/test3/island.png">
        <img id="mouse" class="test-3-item blue_0 red_1" src="./img/test3/mouse.png">
        <img id="ula" class="test-3-item red_0 red_1" src="./img/test3/ula.png">
    </div>
    <div class="section" id="section-3" ondragstart="dragStart(event)" ondragover="dragOver(event)" ondrop="dragDropWord(event)">
        
    </div>`;
};

function dragEndWord() {

}

//Drop элемента с проверкой контейнера
function dragDropWord(event) {
    // Отменяем действия браузера по умолчанию
    event.preventDefault();

    //Флаг для проверки правильности соотнесения слова-контейнера
    let right = true;

    // Если элемент, который мы "роняем" это наш переносимый элемент
    if (draggableElement) {

        if (cuurentLevel == 0 && (!(draggableElement.classList.contains('ready_0')))) {

            if (draggableElement.classList.contains('red_0') &&
            event.target.id == 'section-1') {

                draggableElement.classList.add('ready_' + cuurentLevel);
                event.target.appendChild(draggableElement);
                addScopeCount();
                dragEndWord();

            } else if (draggableElement.classList.contains('blue_0') &&
            event.target.id == 'section-3') {

                draggableElement.classList.add('ready_' + cuurentLevel);
                event.target.appendChild(draggableElement);
                addScopeCount();
                dragEndWord();

            }

        } else if (cuurentLevel == 1 && (!(draggableElement.classList.contains('ready_1')))){

            if (draggableElement.classList.contains('red_1') &&
            event.target.id == 'section-1') {

                draggableElement.classList.add('ready_' + cuurentLevel);
                event.target.appendChild(draggableElement);
                addScopeCount();
                dragEndWord();

            } else if (draggableElement.classList.contains('blue_1') &&
            event.target.id == 'section-3') {

                draggableElement.classList.add('ready_' + cuurentLevel);
                event.target.appendChild(draggableElement);
                addScopeCount();
                dragEndWord();
            }

        }
    }
};