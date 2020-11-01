window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const answers = document.querySelector(".answers"),
    elements = document.querySelector(".wrapper_main");
  let input = '';
  let a = 0,
    b = 0,
    result = 0,
 str = '';  
  elements.addEventListener('click', (e) => {
    const target = e.target;
  
    
    //get number
    if (target && target.classList.contains('number')) {
      input += target.textContent;
      answers.textContent = input;
    }
    if (target.classList.contains('plus') || target.classList.contains('mines')){
      if (str != '') {
         plus(a, b, str);
        str = target.textContent;
        answers.textContent = result;
      }
     str = target.textContent;
      if (a === 0) {
        a = parseInt(input);
        input = '';
      } else {
        b = parseInt(input);
        input = '';
      }
      
    }

 
  
  
  });

  function plus(aa, bb, option) {
    
    
    result = eval(`${aa}${option}${bb}`);
    
    a = result;

  }




});

