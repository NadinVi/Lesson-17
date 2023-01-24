// на странице находятся элементы:
// div - фигура, которая может принимать какие-то формы
// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура
// input для выбора цвета. При его изменении меняется цвет фигуры


const figure = document.querySelector(".figure");
const form = document.getElementById("form");
const select = document.querySelector(".select");
const input = document.getElementById("color");


select.addEventListener("change", () => {
    if (select.value === "rectangle") {
        figure.classList.add("rectangle");
    };

    if (select.value === "circle") {
        figure.classList.add("circle");
    };

});


input.addEventListener("click", e => {
    figure.style.backgroundColor = event.target.value;
})

form.addEventListener("click", e => {
    e.preventDefault();
});



