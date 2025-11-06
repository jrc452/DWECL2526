const buttons = document.querySelectorAll('nav a');
const iframe = document.getElementById('ejFrame');
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
    $("iframe").animate({
        height: '450px',
        margin: '6px',
        padding: '12px',
    }, 1000);
    $("header").animate({
        opacity: '0%',
        padding: '0%',
        height: '0px',
    }, 1000);
    $("nav h4").animate({ 'line-height': '0', }, 1000);
    $("nav a").animate({
        'font-size': '3mm',
        'line-height': '7mm',
    }, 1000);
    setTimeout(() => {
        isOpen = true;
        document.getElementById("head").style.display = 'none';
    }, 1000);
}