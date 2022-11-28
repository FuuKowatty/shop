import './ShoppingCart.scss';
import { actuallOrder } from './Order';
import Popup from './Popup';

export default class ShoppingCart {
    constructor(tag) {
        this.tag = tag;
        this.renderBusket();
        this.btnContainer = this.addedElementsList('popScreen__basketBtnContainer');
        this.totalPriceContainer = this.addedElementsList('totalPriceElement', 'span');
        this.createPopScreen();
        this.popScreen = document.querySelector('.popScreen');
        this.renderBtns();
        this.basketBtns;
    }

    createPopScreen = () => {
        const popScreen = document.createElement('div');
        popScreen.classList.add('popScreen');
        this.createPopScreenContainer(popScreen);
        document.querySelector('.menu').append(popScreen);

    }

    createPopScreenContainer = (popScreen) => {
        const itemContainer = this.addedElementsList('itemContainer');
        itemContainer.append(this.addedElementsList('addedElementsList') );
        itemContainer.append(this.totalPriceContainer);
        itemContainer.append(this.btnContainer);
        popScreen.append(itemContainer);
    }

    addedElementsList(cl, el='div') {
        const div = document.createElement(el);
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
                new Popup('waring', 'Are you sure? <br> It would delete all your chosen products');
            })
            confBtn.addEventListener('click', () => {
                new Popup('info', 'ORDER PLACED! <br> thank you for shopping in our store');
            })

        }
        else {
            btn.addEventListener('click', () => {
                this.togglePopScreen(btn);
            })
        }

    }

    
    clearBusket = () => {
        actuallOrder.products = [];
        document.querySelector('.addedElementsList').innerHTML = '';
        this.togglePopScreenBtns();
    }

    togglePopScreen = (btn) => {
        this.popScreen.classList.toggle('active');
    }

    togglePopScreenBtns() {
        if(document.querySelector('.addedElementsList').innerHTML === '') {
            this.btnContainer.classList.remove('active');
            this.totalPriceContainer.classList.remove('active');

        } else {
            this.btnContainer.classList.add('active');
            this.totalPriceContainer.classList.add('active');
        }
    }

    renderElements = () => {
        document.querySelector('.addedElementsList').innerHTML = '';
        this.totalPriceContainer.innerHTML = actuallOrder.getTotal();
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
        this.btnContainer.append(confBtn, resetBtn);
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





