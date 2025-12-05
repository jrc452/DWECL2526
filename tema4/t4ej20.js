let taskNum = 1;
const tasks = [];
const taskIndex = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let currentTaskIndex = taskIndex[taskNum - 1].toUpperCase();

document.getElementById("addTask").onclick = () => {
    if (!document.getElementById("addTask").disabled) {
        if (parseFloat(document.getElementById("duracion").value) > 0 && !isNaN(parseFloat(document.getElementById("duracion").value))) {
            addTask(parseFloat(document.getElementById("duracion").value) * 1000);
            if (document.getElementById("execute").disabled) {
                document.getElementById("execute").disabled = false;
                document.getElementById("callback").disabled = false;
            }
        }
        if ((tasks.length) === taskIndex.length)
            document.getElementById("addTask").disabled = true;
    }
}


document.getElementById("execute").onclick = () => {
    if (!document.getElementById("execute").disabled)
        procesarTareas(tasks, eval(document.getElementById("callback").value))
};

const addTask = (d) => {
    if (isNaN(d)) return;
    const currentTask = eval(`document.getElementById("task${taskNum}")`);
    eval(`tasks.push({${currentTaskIndex}: d})`);
    currentTask.textContent = `${currentTaskIndex}: ${d}`;
    nextTask();
}

const nextTask = () => {
    if (taskNum !== taskIndex.length) taskNum++;
    currentTaskIndex = taskIndex[taskNum - 1].toUpperCase();
};

function procesarTareas(tareas, callbackFinal) {
    if (typeof (tareas) !== "object") return;
    const tareasCompletadasEnOrden = [];
    tareas.forEach(task => {
        Object.entries(task).forEach(([k, v]) => {
            setTimeout(() => {
                console.log(`Tarea ${k} completada`);
                tareasCompletadasEnOrden.push(k);
                callbackFinal(tareasCompletadasEnOrden);
            }, v);
        });
    });
}

const printScreen = (a) => {
    document.getElementById("screen").innerHTML =
        `
        <p>${a}</p>
        `;
}

const getResult = (a, b) => {
    return;
}