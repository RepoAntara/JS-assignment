    const myAPI = 'https://fakestoreapi.com/products';

    let date = new Date;
    let time = date.getHours();
    let displayTime = document.getElementById('displayTime');
    let dayTime='';
    
    if(time <= 12){
        dayTime = 'Morning';
    }else if(time > 12 && time < 18){
        dayTime = 'Afternoon'
    } else{
        dayTime = 'Evening'
    }
    displayTime.innerHTML = dayTime;

    function start() {
        let userName = document.getElementById('newUserName');
        let displayUserName = document.getElementById('displayUserName');
        let newUserName = localStorage.setItem('name', JSON.stringify(userName.value));
    }
    displayUserName.textContent = JSON.parse(localStorage.getItem('name'));
    
    //PRODUCT
    async function getAPI() {
        const res = await fetch(myAPI);
        const data = await res.json();
        displayCard(data);
    }
    getAPI();
    function displayCard(data){

        let main = document.querySelector('main');
        let card = '';
        let myCard = document.createElement('div');
        for(let i = 0; i<data.length; i++){
                card += `<div class="card">
                            <img src="${data[i].image}" alt="">
                            <p class="name">${data[i].title}</p>
                            <p class="price">$${data[i].price}</p>
                            <button onclick="buy('${data[i].id}')">Buy</button>
                        </div>`
                        };
        main.innerHTML= card;
    }

    /*function search(data){
        let indicator  = document.getElementById('search');
        item = indicator.value
        let filter = data.filter(searchItem =>{
            return data.include(item)

            console.log(item)
        })
    }*/

    async function buy(e){
        const res = await fetch(myAPI);
        const data = await res.json(e);
        displayBuy(data,e);
    }

    function displayBuy(data,e){
        let myItem = data[e-1];
        let buyList = document.getElementById('containerBuy')
        localStorage.setItem(e,JSON.stringify(myItem.price));
        let myChoice = '';
        for(let i = 0; i<localStorage.getItem(e).length; i++){
        myChoice += `<div class="container">
                        <img src="${myItem.image}" alt="${myItem.title}">
                        <p class="choice-name">${myItem.title}</p>
                        <p class="choice-price">$${myItem.price}</p>
                    </div>`
                    console.log(data)
        }
        let displayChoice = document.createElement('div');
        displayChoice.innerHTML = myChoice
        buyList.appendChild(displayChoice);
    }

    function show(){
        let container = document.getElementById('containerBuy')
        container.classList.toggle('container-up');
    }