"use strict";

const buttons = document.querySelectorAll('nav a');
const iframe = document.getElementById('ejFrame');
let isOpen = false;
let _height = '-1px';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        switch (button.getAttribute('href')) {
            case "tema4/flamenco/":
            case "tema4/gestionDeCarritoDeCompra/":
            case "tema4/t4ej20.html":
                break;
            default:
                event.preventDefault();
                switch (button.getAttribute('href')) {
                    case "tema1/t1ej1.html":
                    case "tema1/t1ej3.html":
                    case "tema1/t1ej5.html":
                    case "tema2/t2ej07.html":
                    case "tema2/t2ej11.html":
                        _height = '100px';
                        break;
                    case "tema1/t1ej2.html":
                    case "tema2/t2ej05.html":
                    case "tema2/t2ej12.html":
                    case "tema2/t2ej13.html":
                    case "tema2/t2ej14.html":
                    case "tema2/t2ej15.html":
                    case "tema4/laberinto":
                        _height = '200px';
                        break;
                    case "tema2/t2ej06.html":
                    case "tema4/t4ej14.html":
                    case "tema4/t4ej15.html":
                    case "tema4/t4ej18.html":
                        _height = '360px';
                        break;
                    case "tema1/t1ej4.html":
                        _height = '500px';
                        break;
                    case "tema4/t4ej13.html":
                    case "tema4/t4ej17.html":
                        _height = '540px';
                        break;
                    case "tema4/t4ej19.html":
                        _height = '560px';
                        break;
                    default:
                        _height = '450px';
                }
                if (!isOpen || document.getElementById("ejFrame").style.height !== _height) {
                    iframe.setAttribute('src', "about:blank");
                    openFrame();
                    setTimeout(() => {
                        iframe.setAttribute('src', button.getAttribute('href'));
                    }, 1000);
                } else iframe.setAttribute('src', button.getAttribute('href'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

function openFrame(url) {
    $("iframe").animate({
        height: _height,
        margin: '6px',
        padding: '12px',
    }, 1000);
    $("header").animate({
        opacity: '0%',
        padding: '0%',
        height: '0px',
    }, 1000);
    $("nav h4").animate({
        'line-height': '0',
    }, 1000);
    $("nav a").animate({
        'font-size': '3mm',
        'line-height': '7mm',
    }, 1000);
    setTimeout(() => {
        isOpen = true;
        document.getElementById("head").style.display = 'none';
    }, 1000);
}