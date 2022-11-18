import render from "./renderProducts";
import products from "./components/products";
const input = document.querySelector('.menu__input');

export default input.addEventListener("keyup", () => {
    
    const inputValue = input.value.toLowerCase();
    const arr = products.filter(e => e.name.toLowerCase().includes(inputValue));
    render(arr);
})
