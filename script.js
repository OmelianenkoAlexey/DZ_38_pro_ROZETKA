// ! ДЗ 38. Реалізувати подобу інтернет - магазину.

//     Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться
// список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення,
// що товар куплений і повернення у вихідний стан програми
// (коли відображається лише список категорій).


// const leftImageIphone = document.querySelector(".left-image__iphone");
// const leftImageNotebook = document.querySelector(".left-image__notebook");
// const leftImageWatch = document.querySelector(".left-image__watch");


// const mainContainer = document.querySelector(".main-container");
// const mainIphone = document.querySelector(".main-iphone");
// const mainNotebook = document.querySelector(".main-notebook");
// const mainWatch = document.querySelector(".main-watch");

// const iphone1 = document.getElementById("iphone1");
// const iphone2 = document.getElementById("iphone2");
// const iphone3 = document.getElementById("iphone3");


// const rightContainer = document.querySelector(".right-container");
// const rightIphone1 = document.querySelector(".right-iphone1");
// const rightIphone2 = document.querySelector(".right-iphone2");
// const rightIphone3 = document.querySelector(".right-iphone3");


const categories = [
    {
        name: "iphone",
        image: "images/iphone.png",
    },
    {
        name: "notebook",
        image: "images/mac.png",
    },
    {
        name: "watch",
        image: "images/watch.png",
    },
];

const products = [
    {
        category: "iphone",
        name: "iphone1",
        image: "images/iphone1.jpg",
    },
    {
        category: "iphone",
        name: "iphone1",
        image: "images/iphone2.jpg",
    },
    {
        category: "iphone",
        name: "iphone1",
        image: "images/iphone3.jpg",
    },
    {
        category: "notebook",
        name: "notebook1",
        image: "images/notebook1.png",
    },
    {
        category: "notebook",
        name: "notebook2",
        image: "images/notebook2.png",
    },
    {
        category: "notebook",
        name: "notebook3",
        image: "images/notebook3.png",
    },
    {
        category: "watch",
        name: "watch1",
        image: "images/watch1.png",
    },
    {
        category: "watch",
        name: "watch2",
        image: "images/watch2.png",
    },
    {
        category: "watch",
        name: "watch3",
        image: "images/watch3.png",
    },
];

const container = document.createElement("div");
container.classList.add("container");

const left = document.createElement("div");
left.classList.add("left");

container.append(left);
document.body.append(container);

function renderCategories(arr1) {
    arr1.forEach(item => {
        const leftItem = document.createElement("div");
        leftItem.classList.add("left-item");

        const leftImage = document.createElement("img");
        leftImage.classList.add("left-image");
        leftImage.setAttribute("src", `${item.image}`);
        leftImage.setAttribute("alt", `${item.name}`);

        leftItem.append(leftImage);
        left.append(leftItem);

        leftImage.addEventListener("click", e => {

            renderProducts(products, item.name);
        })
    })
}



renderCategories(categories);


function renderProducts(arr1, nameCategory) {


    const main = document.createElement("div");
    main.classList.add("main");
    const mainItem = document.createElement("div");
    mainItem.classList.add("main-item");

    arr1.forEach(item => {
        if (item.category === nameCategory) {

            const mainBox = document.createElement("div");
            mainBox.classList.add("main-box");

            const mainTitle = document.createElement("div");
            mainTitle.classList.add("main-title");

            const mainImage = document.createElement("img");
            mainImage.classList.add("main-image");
            mainImage.setAttribute("src", `${item.image}`);
            mainImage.setAttribute("alt", `${item.name}`);

            mainBox.append(mainTitle);
            mainBox.append(mainImage);
            mainItem.append(mainBox);


        }

    })

    main.append(mainItem);
    container.append(main);

}

// renderProducts(products);



// leftImageIphone.addEventListener("click", e => {
//     console.log("555");
//     mainNotebook.classList.add("d-none");
//     mainWatch.classList.add("d-none");
//     mainIphone.classList.remove("d-none");
//     rightContainer.classList.add("d-none");
// });
// leftImageNotebook.addEventListener("click", e => {
//     mainIphone.classList.add("d-none");
//     mainWatch.classList.add("d-none");
//     mainNotebook.classList.remove("d-none");
//     rightContainer.classList.add("d-none");
// });
// leftImageWatch.addEventListener("click", e => {
//     mainIphone.classList.add("d-none");
//     mainNotebook.classList.add("d-none");
//     mainWatch.classList.remove("d-none");
//     rightContainer.classList.add("d-none");
// });


// iphone1.addEventListener("click", e => {
//     rightContainer.classList.remove("d-none");
//     rightIphone2.classList.add("d-none");
//     rightIphone3.classList.add("d-none");
//     rightIphone1.classList.remove("d-none");
// });

// iphone2.addEventListener("click", e => {
//     rightContainer.classList.remove("d-none");
//     rightIphone1.classList.add("d-none");
//     rightIphone3.classList.add("d-none");
//     rightIphone2.classList.remove("d-none");
// });

// iphone3.addEventListener("click", e => {
//     rightContainer.classList.remove("d-none");
//     rightIphone1.classList.add("d-none");
//     rightIphone2.classList.add("d-none");
//     rightIphone3.classList.remove("d-none");
// });









// ! ДЗ 41. Модифікувати програму інтернет - магазин

// Робимо на підставі минулого дз.


// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто(вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку(інформація про товар та про доставку)

