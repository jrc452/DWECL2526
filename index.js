const buttons = document.querySelectorAll('a.btn');
const iframe = document.getElementById('iframe');
let isOpen = false;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        openFrame();
        if (!isOpen)
            setTimeout(() => {
                const href = button.getAttribute('href');
                iframe.setAttribute('src', href);
            }, 1000);
        else {
            const href = button.getAttribute('href');
            iframe.setAttribute('src', href);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function openFrame(url) {
    let _iframe = $("#iframe");
    _iframe.animate({
        height: '360px',
        margin: '25px 0 25px 0',
    }, 1000);
    setTimeout(() => isOpen = true, 1000);
}