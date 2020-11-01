window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const answers = document.querySelector(".answers"),
    elements = document.querySelector(".wrapper_main");
  let input = '';
  let a = 0,
    b = 0,
    result = 0,
 str;  
  elements.addEventListener('click', (e) => {
    const target = e.target;
  
    
    //get number
    if (target && target.classList.contains('number')) {
      input += target.textContent;
      answers.textContent = input;
    }
    if (target.classList.contains('plus') || target.classList.contains('mines')){
      str = target.textContent;
      if (a === 0) {
        a = parseInt(input);
        input = '';
        console.log('true');
        plus(a, b, target.textContent);
      } else {
        b = parseInt(input);
        input = '';
     
        console.log('else');
        plus(a, b, target.textContent);
        b = 0;
      }
      
      
        
  
      console.log(result);
    }

 
  
  
  });

  function plus(aa, bb, option) {
    
    
    result = eval(`${aa}${option}${bb}`);
    
    a = result;

  }




});

