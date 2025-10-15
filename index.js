const buttons = document.querySelectorAll('a.btn');
const iframe = document.getElementById('iframe');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const href = button.getAttribute('href');
        iframe.setAttribute('src', href);
        iframe.scrollIntoView({ behavior: 'smooth' });
    });
});