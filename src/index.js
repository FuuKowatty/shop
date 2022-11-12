import "./index.scss";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import render from "./renderProducts";
import { products }from './components/products';

const productSlider = new Slider(document.querySelector('.slider')); //section
const categories = new Categories(document.querySelector('.categories'));
render(products);








