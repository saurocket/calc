
window.addEventListener("DOMContentLoaded", () =>{


const   
        answers = document.querySelector('.answers'),
        elements = document.querySelector('.wrapper_main');
let tepNum = 0,
ans;
    //Chenge Options
    answers.textContent = tepNum;
        const getElem = () => {
           elements.addEventListener('click', (event) =>{

         




               let temp;
                const target = event.target;
                console.log(target.textContent);
                temp = target.textContent;
if (tepNum == 0){
    tepNum = '';
}

                tepNum = tepNum + target.textContent;
                console.log(tepNum);
                answers.textContent = tepNum;
               
                if(target && target.classList.contains('result')){
                    console.log(tepNum);
                    ans = eval(tepNum.substring(0, str.length - 1));
                    console.log(ans);
                    answers.innerHTML = ans;
                } 






        });
    }

 //Chenge Options 






const getNumber = (target) =>{
    dataBase.push(target.textContent);
    number = dataBase.join().replace(/\D+/g,"");
}



// const plus = (a, b) =>{
//     console.log(a,b);
//     console.log(tempMas);
// dataBase = [];
// tempMas = []; 
//     number =  a + b;
//     tempMas.push(parseInt(number));
// }
// const minus = (a, b) =>{
//     console.log(a,b);
//     console.log(tempMas);
//     dataBase = [];
//     tempMas = [];
//     number =  a - b;
//     tempMas.push(parseInt(number));
//     }

const showAnsers = (num) =>{
    answers.textContent = num;


}

getElem();






});