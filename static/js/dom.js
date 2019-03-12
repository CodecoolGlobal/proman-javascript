// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function () {
        dataHandler.getBoards(this.showBoards)
        // retrieves boards and makes showBoards called
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        for (let data of boards){
            let board = document.createElement('div');
            board.classList.add("board_title");
            board.setAttribute('id', `${data.id}b`);
            board.innerHTML = `<h2>${data.title}</h2>`;
            $("body").append(board);
            $("body").append(`<div class="boards" id="${data.id}"></div>`);
            }

        dom.loadStatuses();
    },

    loadStatuses: function() {
        dataHandler.getStatuses(dom.showStatuses)
    },

    showStatuses: function(statuses){
        for (let data of statuses){
            let status = document.createElement('div');
            status.classList.add("container");
            status.setAttribute('id', `${data.id}s`);
            status.innerHTML = `<h3>${data.name}</h3>`;
            $(".boards").append(status);
        }
        dom.loadCards()
    },

    loadCards: function () {
        // retrieves cards and makes showCards called
        dataHandler.getCards(dom.showCards);

    },
    showCards: function (cards) {
        console.log(cards);
        // shows the cards of a board
        // it adds necessary event listeners also
        //<div class="card">hello</div>#}
        for (let data of cards){
            let card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute("id", `${data.id}c`);
            card.innerHTML = `${data.title}`;
            $(`#${data.board_id}`).children(`#${data.status_id}s`).append(card);
        }
    },
    appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (childNode of fakeDiv.childNodes) {
            if (prepend) {
                elementToExtend.prependChild(childNode);
            } else {
                elementToExtend.appendChild(childNode);
            }
        }

        return elementToExtend.lastChild;
    }
    // here comes more features
};
