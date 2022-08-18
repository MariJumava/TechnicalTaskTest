"use strict";

function createCounter(number, min, max) {
    const parent = document.getElementById('counter');
    const wrap = document.createElement('div');
    const btnMinus = document.createElement('button');
    const btnPlus = document.createElement('button')
    const countText = document.createElement('span');
    
    wrap.className = 'counter-wrap';
    btnMinus.className = 'btn btn-minus';
    btnPlus.className = 'btn btn-plus';
    countText.className = 'counter-text';
    

    const methods = {
        checkMinMax: function() {
            number <= min ? btnMinus.disabled = true : btnMinus.disabled = false;
            number >= max ? btnPlus.disabled = true : btnPlus.disabled = false;
          },
          increment: function() {
            number++;
            countText.innerHTML = `counter: ${number}`;
            this.checkMinMax();
          },
          decrement: function() {
            number--;
            countText.innerHTML = `counter: ${number}`;
            this.checkMinMax();
          },
          counter: `counter: ${number}`,
        };

    countText.innerText = `counter: ${number}`;
    btnPlus.innerText = '+';
    btnMinus.innerText = '-';
    btnPlus.addEventListener('click', () => methods.increment());
    btnMinus.addEventListener('click', () => methods.decrement());
    wrap.appendChild(btnMinus);
    wrap.appendChild(btnPlus);
    wrap.appendChild(countText);
    parent.appendChild(wrap);

    return methods;
}

const counter_1 = createCounter(12, 9, 15);
const counter_2 = createCounter(-74, -80, 5);
const counter_3 = createCounter(0, -5, 10);

counter_1.increment();
console.log(counter_1.counter);
counter_2.decrement();
console.log(counter_2.counter);