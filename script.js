document.querySelector('#text').addEventListener('focusout',myText)
document.querySelector('#password').addEventListener('focusout',myPass)


document.querySelector('#btn').addEventListener('click', function() {
    myText();
    myPass();
});
function myText() {
    let message, text;
    let errElement = document.getElementById('text');
    message = document.getElementById('err');
    text = document.getElementById('text').value;

    try {
        if(text == "") {
            
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw 'space'
        }
        if(text.length > 0) {
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            message.innerHTML = '';

        }

    }catch(e) {
        message.innerHTML = 'Fill in this ' + e;
    }

}
function myPass() {
    let message, text;
    let errElement = document.getElementById('password');
    message = document.getElementById('err2');
    pass = document.getElementById('password').value;

    try {
        if(pass == "") {
            
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw 'space'
        }
        if(pass.length > 0) {
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            message.innerHTML = '';

        }

    }catch(e) {
        message.innerHTML = 'Fill in this ' + e;
    }

}