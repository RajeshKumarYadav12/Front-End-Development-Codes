let signUp = document.querySelector('.signup');
let signIn = document.querySelector('.signin');
let Title = document.querySelector('.title');
let nameField = document.querySelector('.namefield');
let underLine = document.querySelector('.underline');
let text = document.querySelector('.text');

signIn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    Title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUp.classList.add('disable');
    signIn.classList.remove('disable');
    underLine.style.transform = 'translateX(30px)';
});

signUp.addEventListener('click', () => {
    nameField.style.maxHeight = '50px';
    Title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signUp.classList.remove('disable');
    signIn.classList.add('disable');
    underLine.style.transform = 'translateX(0px)';
});
