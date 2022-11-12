import './Categories.scss';
import { products } from './products';
import render from '../renderProducts';


const categoriesList = products.map(e => e.name);
categoriesList.push('SALE');

export default class Categories {
    constructor(tag) {
        this.tag = tag;
        this.categoriesList = categoriesList;
        this.createCategoryBar()
    }

    createCategoryBar = () => {
        const categoriesContainer = document.createElement('ul');
        categoriesContainer.classList.add('categories__list')
        this.categoriesList.forEach(e => {
            const li = document.createElement('li');
            const btn = this.createButton(e);
            li.append(btn);
            categoriesContainer.append(li);
        })
        this.tag.append(categoriesContainer);
    }

    createButton = (text) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        this.setEvent(btn);
        return btn
       
    }

    setEvent = (btn) => {
        btn.addEventListener('click', () => {
            if(btn.textContent === 'SALE') {
                render([...products].filter(e => e.sale));
            } else {
                render([...products].filter(e => e.name === btn.textContent));
            }
        })
    }
}




        // <ul class="categories__list">
        //     <li class="categories__listElement">kat1</li>
        //     <li class="categories__listElement">kat2</li>
        //     <li class="categories__listElement">kat3</li>
        //     <li class="categories__listElement">kat4</li>
        //     <li class="categories__listElement">kat5</li>
        //     <li class="categories__listElement">kat6</li>
        //     <li class="categories__listElement">kat7</li>
        //     <li class="categories__listElement">kat8</li>
        //     <li class="categories__listElement">kat9</li>
        // </ul>