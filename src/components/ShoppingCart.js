import './ShoppingCart.scss';
import { actuallOrder } from './Order';

export default class ShoppingCart {
    constructor(tag) {
        this.tag = tag;
        this.renderBusket();
        this.createPopScreen();
        this.popScreen = document.querySelector('.popScreen');
        this.renderBtns();
        this.basketBtns;
    }

    createPopScreen = () => {
        const popScreen = document.createElement('div');
        popScreen.classList.add('popScreen');
        popScreen.append(this.addedElementsList('addedElementsList') );
        popScreen.append(this.addedElementsList('popScreen__basketBtnContainer'));
        document.querySelector('.menu').append(popScreen);

    }

    addedElementsList(cl) {
        const div = document.createElement('div');
        div.classList.add(cl);

        return div
    }

    renderBusket = () => {
        const btn = document.createElement('button');
        btn.classList.add('menu__button');
        btn.innerHTML = '<i class="fa fa-shopping-cart"></i>';
        this.tag.append(btn);
        this.setEvents(btn);

    }

    setEvents = (btn) => {
        if(Array.isArray(btn)) {
            const [confBtn, resetBtn] = btn;
            resetBtn.addEventListener('click', () => {
                actuallOrder.products = [];
                document.querySelector('.addedElementsList').innerHTML = '';
                this.togglePopScreenBtns();
            })

        }
        else {
            btn.addEventListener('click', () => {
                this.togglePopScreen(btn);
            })
        }
    }

    togglePopScreen = (btn) => {
        this.popScreen.classList.toggle('active');
    }

    togglePopScreenBtns()  {
        const [confirmBtn, resetBtn] = this.basketBtns;

        if(document.querySelector('.addedElementsList').innerHTML === '') {
            confirmBtn.classList.remove('active');
            resetBtn.classList.remove('active');
        } else {
            confirmBtn.classList.add('active');
            resetBtn.classList.add('active');
        }
    }

    renderElements = () => {
        document.querySelector('.addedElementsList').innerHTML = '';
        actuallOrder.products
            .forEach(e => {
                this.generateElement(e)
            })
        
    }

    renderBtns = () => {
        const confBtn = document.createElement('button');
        const resetBtn = document.createElement('button');
        this.setStyle(confBtn, resetBtn);
        this.setContent(confBtn, resetBtn);
        this.setEvents([confBtn, resetBtn]);

        this.basketBtns = [confBtn, resetBtn];
        document.querySelector('.popScreen__basketBtnContainer').append(confBtn, resetBtn);
    }

    setContent(c, r) {
        c.textContent = 'confirm';
        r.textContent = 'reset';
    }

    setStyle(c, r) {
        c.classList.add('popScreen__confirmBtn');
        r.classList.add('popScreen__resetBtn');
    }

    generateElement = (productObj) => {
        const addedItemContainer = document.createElement('div');
        addedItemContainer.classList.add('popScreen__item')
        addedItemContainer.innerHTML = `
            <img src=https://placeimg.com/50/50/any>
            <div class="popScreen__item--rightSide">
                <p>${productObj.getName()}</p>
                <p>${productObj.getPrice()}</p>
            </div>
        `;
        document.querySelector('.addedElementsList').append(addedItemContainer);
    }


}





