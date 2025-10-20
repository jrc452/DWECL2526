const resultElement = document.getElementById("result");

function calculateDaysTillXmas() {
    let today = new Date();
    let xmasYear = today.getFullYear();

    if (today.getMonth() === 11 && today.getDate() > 25)
        xmasYear++;

    const nextXmas = new Date(xmasYear, 11, 25);
    const diffMilliseconds = nextXmas.getTime() - today.getTime();
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysRemaining = Math.ceil(diffMilliseconds / millisecondsPerDay);
    return daysRemaining;
}

resultElement.textContent = `Quedan ${calculateDaysTillXmas()} días para la próxima Navidad`;
console.log(`Quedan ${calculateDaysTillXmas()} días para la próxima Navidad`);