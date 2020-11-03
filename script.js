window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const answers = document.querySelector(".answers"),
    elements = document.querySelector(".wrapper_main");
  let input = '';
  let a = 0,
    b = 0,
    result = 0,
    str = '';
  console.log(`START a - ${a} b - ${b} result - ${result}`);
  
  answers.textContent = result;
  elements.addEventListener('click', (e) => {
    const target = e.target;
  
    
    //get number
    if (target && target.classList.contains('number')) {
      input += target.textContent;
      answers.textContent = input;
    }
    // + - 
        if (target.classList.contains('plus') || target.classList.contains('mines')){
          if (str != '') {
            plus(a, b, str);
            str = target.textContent;
            console.log(`Number != str '' a - ${a} b - ${b} result - ${result}`);
          } 
           
            str = target.textContent;
          console.log(str);
          if (a === 0) {
            a = parseInt(input);
            input = '';
            console.log(`Block if ${a} `);
          } else {
            b = parseInt(input);
            input = '';
            console.log(`Block else ${b}`);
            plus(a, b, str);
          }

    }
    // Result = 
    if (target.classList.contains('result')) {
      b === 0 ? b = parseInt(input) : console.log('gg');
            plus(a, b, str);
            input = '';
            answers.textContent = result;
            console.log(`result a - ${a} b - ${b} result - ${result}`);
          }
    //C
    if (target.classList.contains('reset')) {
            str = '';
            a = 0;
            b = 0;
            result = 0;
            input = '';
            answers.textContent = result;
            console.log(`C   a - ${a} b - ${b} result - ${result}`);
          }
  });

  function plus(aa, bb, option) {
    console.log(aa, bb);
    result = eval(`${aa}${option}${bb}`);
    
    a = result;
    answers.textContent = result;
    input = '';

  }
});

