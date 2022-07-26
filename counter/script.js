// Set initial value
let count = 0;

// Set value and buttons
let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

// buttons Node list event listener
btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    let styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
      count--;
    }
    else if(styles.contains('increase')) {
      count++;
    }
    else {
      count = 0;
    }
    // Update color of count after its value has been updated
    if(count < 0) {
      value.style.color = 'red';
    }
    else if(count > 0){
      value.style.color = 'green';
    }
    else {
      value.style.color = 'black';
    }
    // Update value's text content outside of the conditionals
    value.textContent = count;
  })
})
