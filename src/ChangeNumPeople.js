export function  ChangeNumPeople (e) {
    var allAmount=document.querySelectorAll('.amount')//כמות המוצר של כולם
    
    
    
    
    var countP=document.querySelector('.countP');//מספר האנשים כפי שמוצג במסך
    var servings=countP.innerText;//מספר האנשים שהמתקון מתאים
    
    
    
    if(e.target.id=='plus'){
      countP.innerText=++countP.innerText;
    }
    else{
      if(countP.innerText==1){
        return
      }
      countP.innerText=--countP.innerText;
    }
     
    
    
    
    allAmount.forEach(element=>{
      element.innerHTML=(''+(element.innerText/servings)*countP.innerText).slice(0,6);
    })
    
    
    
    
    
    
    
    }
    