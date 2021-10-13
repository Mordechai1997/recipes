
import { ChangeNumPeople } from "./ChangeNumPeople.js";
import { addItemToStorage } from "./addItemToStorage.js";
import { itemToLike } from "./addItemToStorage.js";

//import { itemToLike, leaveLike } from "./itemToLike.js";


import { addToShop } from "./addToShop.js";


//var myPassword = "?apiKey=7dab804b94da4af7a8762465cc22bbbc";
//var myPassword = "?apiKey=b9f15989e84f4b139601a902f3d81e15";
var myPassword="?apiKey=872e5928c234421aa70b7a7f948f0b04&query=";


var listProducts = document.querySelector('#list-products');
var product = document.querySelector('#product');

export function getprepparation(event) {



  var id = event.target.id;

  if (!id) {
    id = event.target.parentElement.id;
  }
  if (!id) {
    id = event.target.parentElement.parentElement.id;
  }
  fetch(`https://api.spoonacular.com/recipes/${id}/information${myPassword}`)
    .then((res) => res.json())
    .then((data) => {
      product.innerHTML = '';
      listProducts.innerHTML = '';

      var divTitle = document.createElement('div');
      divTitle.className = 'Details';


      var divCoutPerson = document.createElement('div');
      divCoutPerson.className = 'countPerson';




      var pMinutes = document.createElement('p');//זמן הכנה
      const imgMinutes = new Image();
      imgMinutes.src = './image/watch.png';
      imgMinutes.className = 'icon';
      pMinutes.appendChild(imgMinutes);
      var spanMinutes = document.createElement('span');
      spanMinutes.innerText = data.readyInMinutes;
      pMinutes.appendChild(spanMinutes);
      pMinutes.innerHTML += ' MINUTES ';

      divCoutPerson.appendChild(pMinutes);

      var pServings = document.createElement('p');//כמות אנשים
      const imgServings = new Image();
      imgServings.src = './image/person.png';
      imgServings.className = 'icon';
      pServings.appendChild(imgServings);
      var spanServings = document.createElement('span');
      spanServings.innerText = data.servings;
      spanServings.setAttribute('class', 'countP')
      pServings.appendChild(spanServings);
      pServings.innerHTML += ' SERVINGS ';

      divCoutPerson.appendChild(pServings);

      console.log(data)
      const imgPlus = new Image();//plus
      imgPlus.src = './image/icon-plus.jpg';
      imgPlus.className = 'CoutPerson';
      imgPlus.id = 'plus';
      imgPlus.setAttribute('data-key', data.servings);

      imgPlus.addEventListener('click', ChangeNumPeople, false);

      divCoutPerson.appendChild(imgPlus);

      const imgMinus = new Image();//minus 
      imgMinus.src = './image/minus-icon.png';
      imgMinus.className = 'CoutPerson';
      imgMinus.id = 'minus';
      imgMinus.addEventListener('click', ChangeNumPeople, false);

      divCoutPerson.appendChild(imgMinus);
      divTitle.appendChild(divCoutPerson);




      const imgHeart = new Image();//like
      imgHeart.src = './image/like-icon.png';
      imgHeart.id = 'heart';
      imgHeart.setAttribute('data-key', id);
      imgHeart.addEventListener('click', addItemToStorage, false);
      // imgHeart.addEventListener('mouseover',itemToLike,false);
     

      var divLike = document.createElement('div');
      divLike.setAttribute('class', 'likeIt');
      // divLike.addEventListener('mouseleave',leaveLike,false);

      divLike.appendChild(imgHeart);

      var divListLike = document.createElement('div');
      divListLike.setAttribute('id', 'i-like-it');

      divLike.appendChild(divListLike)


      divTitle.appendChild(divLike);


      product.appendChild(divTitle);



      var divIngredients = document.createElement('div');
      divIngredients.id = 'ingredients';




      data.extendedIngredients.forEach(element => {
        var dProduct = document.createElement('div');
        dProduct.innerHTML = `<svg viewBox="0 0 384 512" width="15" title="clipboard-check">
                                 <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z" />
                              </svg>`
        var sAmount = document.createElement('span');
        sAmount.innerText = ('' + element.amount).slice(0, 6);
        sAmount.setAttribute('class', 'amount');
        sAmount.setAttribute('data-key', element.name);

        dProduct.appendChild(sAmount)
        dProduct.innerHTML += ' ' + element.name;
        dProduct.className = "ingredient";

        divIngredients.appendChild(dProduct);

      });
      var buttonShop = document.createElement('button');
      buttonShop.innerText = 'ADD TO SHOPPING LIST';
      const imgShop = new Image();
      imgShop.src = './image/shop.png';
      buttonShop.appendChild(imgShop);

      buttonShop.setAttribute('class', 'shop');
      buttonShop.addEventListener('click', addToShop, false);


      var shopA = document.createElement('a');
      shopA.setAttribute('href', data.sourceUrl);
      shopA.setAttribute('target', '_blank');

      shopA.innerText = 'DIRECTION';


      var direction = document.createElement('button');


      direction.setAttribute('class', 'shop');
      direction.appendChild(shopA);


      //DIRECTION
      product.appendChild(divIngredients);
      product.appendChild(buttonShop);


      var h2=document.createElement('h2');
      h2.setAttribute('class','titleCook');
      h2.innerHTML='HOW TO COOK IT';
      product.appendChild(h2);
      product.append(direction);


    itemToLike();//list like

    })

}




