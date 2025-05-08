
let n = 0;
const miObject = {};
let x = 0;
let y = 0;

function Question() {
    let id = n;

    const question = document.createElement("div");

    question.id = `question${id}`;
    const botones = document.createElement("div");
    botones.innerHTML = `
        <button onclick="Remove(${id})">Borrar</button>
        <button onclick="MasOpciones(${id})">Mas Opciones</button>
        
    `;
    question.appendChild(botones); 
    const respuesta = respuesta_corta(id);
    question.appendChild(respuesta);
    
    miObject[id] = id;
    n++;

    return {
        question: question,
        ID: `question${id}`
    };

}

/*function StilosInput() {
    const style = document.createElement('style');
    let cssRules = "";

    for (let id of numbers) {
        cssRules +=  `
         #text${id} {
        color: blue;
         font-weight: bold;
         }
        `;
        
    }
    style.textContent = cssRules;
    document.head.appendChild(style);

}*/


function addQuestion() {
    const q = Question();
    document.getElementById("lista_preguntas").appendChild(q.question);
}

function Remove(id) {
    const remove = document.getElementById(`question${id}`);
    n = n - 1;
    x = 0;

    if (n < 0) {
        n = 0;
    }
    
    remove.remove();
}

let IDs = 0;
//Mas opciones 
function MasOpciones(id) {

    if (miObject[id] === undefined) {
        miObject[id] = 0;
    }

    
    console.log(" Mi objeto");

    console.log(miObject[id]);


    if (parseInt(miObject[id]) === id) {
        const content = document.createElement("div");
        content.id = `masOpciones${id}`;

        content.innerHTML = `
            <ul class="listaOpcines">
            <li> <button class="button_lO" onclick="Respuesta_Corta(${id})">Respuesta Corta</button></li> 
               <li><button onclick="Parrafo(${id})"  class="button_lO">Parrafo</button></li> 
               <li> <button onclick="opciones(${id})" class="button_lO" >Varias opciones</button></li> 
               <li> <button onclick="casillas(${id})" class="button_lO">Casillas</button></li> 
               
                </ul>
            `;

        document.getElementById(`question${id}`).appendChild(content);
        
        miObject[id] += 1;
    } else {
        const remove = document.getElementById(`masOpciones${id}`);
        miObject[id] -= 1;
        remove.remove();
    }


}



function Parrafo(id){
    const content = document.createElement("div");
    content.id = `parrafo${id}`;
        content.innerHTML = `
            <p contenteditable="true">Pregunta</p>
           <p contenteditable="true">Texto de respuesta larga</p>
            `;
            document.getElementById(`question${id}`).appendChild(content);
            
            //Borrar otros elemetos
            document.getElementById(`respuestaCorta${id}`);
            document.getElementById(`opciones${id}`);
            document.getElementById(`casillas${id}`);
           
}

function respuesta_corta(id){
    const content = document.createElement("div");
    content.id = `respuestaCorta${id}`;
        content.innerHTML = `
            <p contenteditable="true">Pregunta</p>
           <p contenteditable="true">Texto de respuesta corta</p>
            `;
            return content;
           
}

function Respuesta_Corta(id){
    const content = respuesta_corta(id);
    document.getElementById(`question${id}`).appendChild(content);
}



function opciones(id){
    x += 1;
    const content = document.createElement("div");
    content.id = `opciones${id}`;
        content.innerHTML = `
        <label contenteditable="true" for="masOpciones${id}">Opcion ${x}</label>
            <input type="radio" id="masOpciones${id}"/>
            <button class="button_lO" onclick="EraseOpcion(${id})">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
            </button>
           
            `;
            document.getElementById(`question${id}`).appendChild(content);
}

function EraseOpcion(id){
    const remove = document.getElementById(`opciones${id}`);
    x -=1;
    remove.remove();

}



function casillas(id){
    y += 1;
    const content = document.createElement("div");
    content.id = `casillas${id}`;
        content.innerHTML = `
        <label contenteditable="true" for="opcionCasillas${id}">Opcion ${y}</label>
            <input type="checkbox" id="opcionCasillas${id}"/>
            <button class="button_lO" onclick="EraseCasilla(${id})">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
            </button>
           
            `;
            document.getElementById(`question${id}`).appendChild(content);
}

function EraseCasilla(id){
    const remove = document.getElementById(`casillas${id}`);
    y -=1;
    remove.remove();
}