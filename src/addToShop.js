import { removeItem } from "./removeItem.js";

var listProducts=document.querySelector('#list-products');

export function addToShop(e){
    var allAmount=document.querySelectorAll('.amount');
    var divProducts=document.createElement('div');
  
    allAmount.forEach(element => {
    var divSingleProduct=document.createElement('div');
  
    var input=document.createElement('input')
    input.setAttribute('type','number');
    input.setAttribute('class','inputNum');
  
    input.setAttribute('value',element.innerText);
    input.setAttribute('min',element.innerText);

    divSingleProduct.appendChild(input);
  
  
    var name=document.createElement('p')
    name.innerText=element.getAttribute('data-key');
    divSingleProduct.appendChild(name);
  

  var remove=document.createElement('button')
  remove.innerHTML = "&times;";
  remove.setAttribute('class','removItem')
  remove.addEventListener('click',removeItem,false)

  divSingleProduct.appendChild(remove);
    divSingleProduct.setAttribute('class','sigleProduct');
    divProducts.appendChild(divSingleProduct);
    })
    listProducts.innerHTML='';
    listProducts.appendChild(divProducts)
    
  }
  