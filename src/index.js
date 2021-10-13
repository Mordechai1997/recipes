import { getprepparation } from "./prepparation.js";

//var myPassword1 = "?apiKey=b9f15989e84f4b139601a902f3d81e15&query=";

//var myPassword1 = "?apiKey=7dab804b94da4af7a8762465cc22bbbc&query=";
//var myPassword1 = "?apiKey=866996e8d3c94fbabf01157d317a1e55&query=";
var myPassword1="?apiKey=872e5928c234421aa70b7a7f948f0b04&query=";
var myApi = 'https://api.spoonacular.com/recipes/complexSearch';

var submit = document.querySelector('#submit');
var input = document.querySelector('#Search');
var select = document.querySelector('#select');

//console.log('%cthis', 'color: red; font-size: 50px; border: 3px solid')

submit.addEventListener('click', getRecipes, false);

function getRecipes() {

  select.innerHTML = '';
  var result;
  if(input.value)
    result = input.value;
  else
    result ='tuna';
  fetch(myApi + myPassword1 +result)
    .then((res) => res.json())
    .then((data) => {

      data.results.forEach(element => {




        fetch(`https://api.spoonacular.com/recipes/${element.id}/information${myPassword1}`)
          .then((res) => res.json())
          .then((data) => {
            var div = document.createElement('div');

            div.className = "box";
            var p = document.createElement('p');
            p.innerText = data.title.toUpperCase();
            p.className = "title";

            const imgElement = new Image();
            imgElement.src = data.image;
            div.appendChild(imgElement);

            div.id = data.id;
            div.addEventListener('click', getprepparation, false);
            var dSummary = document.createElement('div');
            dSummary.appendChild(p);

            dSummary.innerHTML += '<br/>' + data.summary;
            dSummary.className = 'summary';

            div.appendChild(dSummary);
var a=document.createElement('a');
a.setAttribute('href','#product');
a.appendChild(div)


            select.appendChild(a);
          })

        //summary

      });

    });
}



//getRecipes('tuna');

//https:api.spoonacular.com/recipes/complexSearch?apiKey=866996e8d3c94fbabf01157d317a1e55&query=pasta