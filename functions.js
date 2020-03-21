let screen = document.getElementById('screen'),
    buttons = document.querySelectorAll('button'),
    screenValue = '',
    expression = '';
for (item of buttons) {
    item.addEventListener('click', () => {
        let btnTxt = event.target.innerText;
        if (btnTxt == 'C') {
            screenValue = '';
            expression = '';
            screen.value = screenValue;
        }
        else if (btnTxt == '=') {
            screen.value = eval(expression);
            screenValue = screen.value;
            expression = screen.value;
        }
        else if (event.target.getAttribute('id') == 'multiply') {
            screenValue += btnTxt;
            expression += '*';
            screen.value = screenValue;
        }
        else if (event.target.getAttribute('id') == 'divide') {
            screenValue += btnTxt;
            expression += '/';
            screen.value = screenValue;
        }
        else if (btnTxt == 'Del') {
            screenValue = screenValue.slice(0, screenValue.length - 1);
            expression = expression.slice(0, expression.length - 1);
            screen.value = screenValue;
        }
        else {
            screenValue += btnTxt;
            expression += btnTxt;
            screen.value = screenValue;
        }
    })
}