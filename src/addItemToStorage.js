//var myPassword = "?apiKey=7dab804b94da4af7a8762465cc22bbbc&query=";
var myPassword = "?apiKey=872e5928c234421aa70b7a7f948f0b04&query=";
export function addItemToStorage(e) {


    //var id=e.target.getAttribute('data-key');
    var { key } = e.target.dataset;
    fetch(`https://api.spoonacular.com/recipes/${key}/information${myPassword}`)
        .then((res) => res.json())
        .then((data) => {
            var item = JSON.parse(localStorage.getItem('like'))

            localStorage.setItem('like', JSON.stringify({
                [key]: data,
                ...item
            }));
            itemToLike();
            //console.log( JSON.parse(localStorage.getItem('like')));
        })

}


export function itemToLike(){
    var list = document.getElementById('i-like-it');
    
    
    var item = JSON.parse(localStorage.getItem('like'))
    list.innerHTML = '';
    
    for (const key in item) {
        var a=document.createElement('a');
        a.setAttribute('href',  item[key].sourceUrl);
        a.setAttribute('target', '_blank');

        var div = document.createElement('div');
        div.setAttribute('class', 'item');
    
    
        var p = document.createElement('p');
        p.innerText = item[key].title.toUpperCase();
        p.setAttribute('class', 'title');
        div.appendChild(p);
    
        const imgElement = new Image();
        imgElement.src = item[key].image;
        div.appendChild(imgElement);
        a.appendChild(div);

    
        list.appendChild(a);
    
        //title summary 
    }
}