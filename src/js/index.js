const NUMEROTOTALBOLAS = 90;
const dom = {
    classBingo: document.querySelector(".bingo"),
    button: document.querySelector("button")
}
//We create the 15 numbers for player or Cpu. We use the function -> bcz it's "easy"
const createCarton = (numberItems = 15) =>{
    const ballsCarton = _.shuffle(_.range(1, NUMEROTOTALBOLAS + 1));//create the range of numebers
    return ballsCarton.splice(0, numberItems);//15 random chosen numbers from the range
}
//In this case, we put the numbers in the html to show it in css
const putNumbers = (elements, carton)=>{
    const elementsCards = document. querySelector(elements);
    elementsCards.innerHTML = ''; /*Para limpiar lo que estaba en el html*/
    for(let i = 0; i < carton.length; i++)
       elementsCards.innerHTML += `<div class="number number${carton[i]}">${carton[i]}</div>`;   
}
//We call the functions to use bingo, player and cpu. 
const ballBingo =  _.shuffle(_.range(1, NUMEROTOTALBOLAS +1));
const jugador = createCarton();
putNumbers('.jugador', jugador);
const cpu = createCarton();
putNumbers('.cpu', cpu);

//We put a new number in the cell and remove the repeated
const newNumber = () => { 
    const newBall = ballBingo.pop();
    dom.classBingo.textContent = newBall;
    const findBola = document.querySelectorAll('.number' + newBall);
    for (let i = 0; i < findBola.length; i++) {//remove the numbers repeated
      findBola[i].classList.add('strike');
      _.pull(jugador, newBall);
      _.pull(cpu, newBall);
    }  
    winner();
}
//we check who is the winner. 
const winner = () => {
    if (jugador.length == 0) {
      alert('¡Has ganado!');
      document.querySelector('button').remove();
    }
    if (cpu.length == 0) {
      alert('¡Has perdido!');
      document.querySelector('button').remove();
    }   
}
  dom.button.addEventListener('click', newNumber);


  /* Question, can we do the same as what we did in the function put Numbers, using
  appendChild? I know it's slowler but it's a question that I want to solve. */
  /*
parent = document.querySelector('h3');
for(let i=0; i<4 ; i++){
let div = document.createElement('div');
div.classNmae += `row${i}`;
div.textContent += `caca${i}`;
parent.appendChild(div);
}

*/