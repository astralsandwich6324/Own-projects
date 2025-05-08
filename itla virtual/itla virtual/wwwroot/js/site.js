
let n = 0;
const numbers = [];


//En deshuso
function isertarTexto() {
    for (let id of numbers) {
        const texto = document.getElementById(`text${id}`).innerText;
        console.log(texto);
        const labelTexto = document.getElementById(`label${id}`).innerText;
        console.log(labelTexto);
    }

}
////
function Question(pos) {
    let id;

    if (typeof pos !== "undefined") {
        id = pos + 1;
        if (id <= 0) {
            id = 1;
        }
        numbers.push(id);
    } else {
        id = ++n;
        numbers.push(id);
    }

    const question = document.createElement("div");
    question.id = `question${id}`;
    question.innerHTML = `
        <p id="text${id}" contenteditable="true">Pregunta sin titulo</p>
        <button onclick="Remove(${id})">Borrar</button>
        <button onclick="Añadir(${id})">Añadir</button>
        <label id="label${id}" contenteditable="true" for="op${id}">Opción ${id}</label>
        <input type="checkbox" id="op${id}"/>
    `;
    StilosInput();

    return question;

}

function StilosInput() {
    const style = document.createElement('style');
    let cssRules = "";

    for (let id of numbers) {
        cssRules += `
         #text${id} {
        color: blue;
         font-weight: bold;
         }
        `;

    }
    style.textContent = cssRules;
    document.head.appendChild(style);

}


function addQuestion() {
    const q = Question();
    document.getElementById("lista_preguntas").appendChild(q);
}

function Remove(id) {
    const remove = document.getElementById(`question${id}`);
    n = n - 1;

    if (n < 0) {
        n = 0;
    }
    numbers.pop();
    remove.remove();
}

function Añadir(id) {
    const q = Question(id);
    const list = document.getElementById("lista_preguntas");
    const target = document.getElementById(`question${id}`);
    list.insertBefore(q, target.nextSibling);
}


