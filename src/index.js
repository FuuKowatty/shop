import "./index.scss";
import searchEngine from "./searchEngine";
import ShoppingCart from './components/ShoppingCart';
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import render from "./renderProducts";
import products from './components/products';

export const Menu__ShopingCart = new ShoppingCart(document.querySelector('.menu__basket'));
const productSlider = new Slider(document.querySelector('.slider')); //section
const categories = new Categories(document.querySelector('.categories'));


render(products);








