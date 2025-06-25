const input = document.getElementById("searchinput");
const btn = document.getElementById("button");

let data = [
    {
        image: './image copy 2.png',
        name: 'Mars rug',
        price: '100 Coins',
        quantity: '24 dona mavjud'
    },

    {
        image: './image copy 4.png',
        name: 'Keyborad Sticker',
        price: '49 Coins',
        quantity: '11 dona mavjud'
    },

    {
        image: './image copy 5.png',
        name: 'Smart watch',
        price: '899 Coins',
        quantity: '4 dona mavjud'
    },

    {
        image: './image copy 6.png',
        name: 'Wireless keyboard',
        price: '350 Coins',
        quantity: '0 dona mavjud'
    },

    {
        image: './image copy 7.png',
        name: 'Mouse',
        price: '359 Coins',
        quantity: '24 dona mavjud'
    },

    {
        image: './image copy 8.png',
        name: 'AirPods',
        price: '499 Coins',
        quantity: '11 dona mavjud'
    },

    {
        image: './image copy 9.png',
        name: 'Powerbank',
        price: '899 Coins',
        quantity: '5 dona mavjud'
    },

    {
        image: './image copy 10.png',
        name: 'USB Flash drive',
        price: '299 Coins',
        quantity: '21 dona mavjud'
    },

    {
        image: './image copy 11.png',
        name: 'SmartPhone',
        price: '3699 Coins',
        quantity: '2 dona mavjud'
    },

    {
        image: './image copy 12.png',
        name: 'PlayStation 5',
        price: '7449 Coins',
        quantity: '1 dona mavjud'
    },

    {
        image: './image copy 13.png',
        name: 'Yandex Station',
        price: '1999 Coins',
        quantity: '4 dona mavjud'
    },
    {
        image: './image copy 14.png',
        name: 'Planshet Samsung',
        price: '4999 Coins',
        quantity: '24 dona mavjud'
    }
];

let container = document.getElementById('container');

function showData(data) {
    container.innerHTML = " ";

    data.forEach((value) => {

        let card = document.createElement("div");
    
    card.classList.add(
        "w-[290px]", "h-[290px]", "rounded-[30px]", "shadow-lg",
        "flex", "flex-col", "items-center", "text-center",
        "pt-5", "pb-6", "gap-3", "bg-white"
    );
    
    card.innerHTML = `
        <img src="${value.image}" class="w-[184px] h-[118px] object-contain" alt="${value.name}">
        <h2 class="font-medium text-[15px]">${value.name}</h2>
        <div class="flex gap-2 items-center justify-center">
            <img src="image copy 3.png" width="18" height="19" alt="coin">
            <span>${value.price}</span>
        </div>
        <p class="font-light text-[13px] text-[#000000BF]">${value.quantity}</p>
    `;
    container.appendChild(card);
    });
}

showData(data);

btn.addEventListener("click", () => {
    let inpValue = input.value.toLowerCase();
    let filteredCards = data.filter((value) => value.name.toLowerCase().includes(inpValue));
    
    showData(filteredCards);
});

