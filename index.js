const buttons = document.querySelectorAll('a.btn');
const iframe = document.getElementById('iframe');
const mainSection = document.getElementById('mainSection');

mainSection.hidden = true;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const href = button.getAttribute('href');
        iframe.setAttribute('src', href);
        mainSection.hidden = false;
        iframe.scrollIntoView({ behavior: 'smooth' });
    });
});