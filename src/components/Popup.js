import { Menu__ShopingCart } from '../index'

export default class Popup {
    constructor(type, message, height = '500px', width = '500px' ) {
        this.type = type;
        this.message = message;
        this.height = height;
        this.width = width;
        this.board;
        this.createBoard();
        this.createPopup();

    }

    createPopup = () => {
        const div = document.createElement('div');
        div.classList.add('popup');
        div.style.height = document.documentElement.offsetHeight + 'px';
        div.append(this.board);
        document.body.append(div);

    }

    createBoard = () => {
        const div = document.createElement('div');
        div.classList.add('infoBoard');
        // div.classList.add(`width: ${this.width}, 'height: ${this.height}`);
        this.board = div;
        const btn = this.createBtn();
        this.addContent(btn)
    }

    createBtn = () => {
        if(this.type === 'info') {
            return document.createElement('button');
        }
        else if(this.type === 'waring') {
            return [document.createElement('button'), document.createElement('button')]
        }
        
    
    }
        // this.addContent(btn);

    addContent = (btn) => {
        if(this.type === 'info') {
            this.board.innerHTML = `<span class="infoBoard__info"><i class="fa fa-info-circle" aria-hidden="true"></i></span> ${this.message}`;
            btn.textContent = 'OK';
            btn.addEventListener('click', (e) => this.setEventBtn(e.currentTarget));
            this.board.append(btn);
        } else if(this.type === 'waring') {
            this.board.innerHTML = (`<span class="infoBoard__warning"><i class="fa fa-exclamation"></i></span> ${this.message}`);
            btn[0].textContent = 'OK';
            btn[1].textContent = 'Cancel';
            const btnContainer = document.createElement('div');
            btnContainer.classList.add('btnContainer');
            btnContainer.append(btn[0], btn[1]);
            btn.forEach(e => e.addEventListener('click', () => this.setEventBtn(e) ));
            this.board.append(btnContainer);
        }
        this.renderBoard(btn);
    }

    setEventBtn = (e) => {
        this.board.remove();
        if(e.textContent === 'OK') {
            Menu__ShopingCart.clearBusket();
        }
    }

    renderBoard = (btn) => {
        const scrolled = window.scrollY;
        const clientHeight = document.documentElement.clientHeight;
        const menuHeight = document.querySelector('.menu').offsetHeight;
        this.board.style.top = scrolled + (clientHeight * 0.5) + (menuHeight * 0.5) + 'px';

        // document.body.append(this.board);
    }
}