import './Slider.scss';
import { productsSlider } from './sliderProductsList';

export default class Slider {
    currentIndex = 0;

    constructor(tag) {
          this.tag = tag;
          this.createElements();
          this.sliderListElements;
          this.img = document.querySelectorAll('.slider__img');
          // this.sliderListElements = document.querySelectorAll('.slider__list li');
          this.setActiveSliderList();
          this.setActiveSliderImg();
      }

    createElements() {
        this.setDisplay();
        this.setSliderList();
        this.setBtnEvents();
    }

    setDisplay = () => {
        this.tag.classList.add('slider')
        this.tag.innerHTML = `
            <img class="slider__img loadAnimation" src="" alt="slider photo">
            <button class="slider__button slider__button--left"><</button>
            <button class="slider__button slider__button--right">></button>
        `;
    }

    setSliderList = () => {
        const listContainer = document.createElement('ul');
        listContainer.classList.add('slider__list');
        productsSlider.forEach((e) => {
            listContainer.append(document.createElement('li'))
        });
        this.tag.append(listContainer);
        this.sliderListElements = listContainer.childNodes;
        this.setListEvent();

    }

    setListEvent = () => {
        this.sliderListElements.forEach((e, index) =>
            e.addEventListener('click', () => {
                this.currentIndex = index;
                this.setActiveSliderImg();
                this.setActiveSliderList();
            }))
    }

    setBtnEvents = () => {
        const leftBtns = document.querySelectorAll('.slider__button--left');
        const rightBtns = document.querySelectorAll('.slider__button--right');

        leftBtns[leftBtns.length-1]
            .addEventListener('click', this.moveLeft);

        rightBtns[rightBtns.length-1]
            .addEventListener('click', this.moveRight);
    }

    moveLeft = () => {
        if(this.currentIndex === 0) {this.currentIndex = productsSlider.length-1}
        else {
            this.currentIndex = this.currentIndex-1;
        }
        this.setActiveSliderImg();
        this.setActiveSliderList();
    }

    moveRight = () => {
        if(this.currentIndex === productsSlider.length-1) {this.currentIndex = 0}
        else {
            this.currentIndex++;
        }
        this.setActiveSliderImg();
        this.setActiveSliderList();

    }

    setActiveSliderImg = () => {
            this.img[this.img.length-1].src = productsSlider[this.currentIndex];  
    }

    setActiveSliderList = () => {
        this.sliderListElements.forEach((e, index) => {
            if(index === this.currentIndex) {
                e.classList.add('active')
            } else {
                e.classList.remove('active')
            }
        })
    }
}



