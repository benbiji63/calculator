const calculator = document.getElementById('calculator');
const inputs = document.getElementById('inputs');
const display = document.getElementById('display');
const text = document.getElementById('text');

const changeText = content => {
  text.value += content;
};

const clearText = () => {
  text.value = '';
};

inputs.addEventListener('click', e => {
  let buttonValue = e.target.value;
  console.log(buttonValue);
  if (buttonValue === undefined) {
  } else if (buttonValue === 'AC') {
    clearText();
  } else if (buttonValue === 'CE') {
    let value = text.value.substring(0, text.value.length - 1);
    clearText();
    changeText(value);
  } else if (buttonValue==='='){
    let value = eval(text.value)
    clearText('')
    changeText(value)
  }
  else {
    changeText(buttonValue);
  }
});

