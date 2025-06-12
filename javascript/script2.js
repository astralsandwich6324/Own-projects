function Activar(n) {

    switch (n) {
        case 1:
            
            
            if(document.getElementById("sub_btn1")){

                const element = document.getElementById(`sub_btn1`);
                element.remove();

                for(let i = 2; i <= 4; i++){
                    document.getElementById(`button_container${i}`).style.display = "block";
                }

                return;

            }

            const div = document.createElement("div");
                div.className = "input-group mb-3";
                div.id ="sub_btn1";
            
                div.innerHTML = `
                 <button class="btn btn-primary" onclick="respuesta_corta()"  id="subbtn1">
                 Aceptar
                </button>
                <input  id="input1" type="number" class="form-control"
                placeholder="Escribe aqui la cantidad">
                 `
                const btn_container = document.getElementById("button_container1");
                btn_container.appendChild(div);

                for(let i = 2; i <= 4; i++){
                    document.getElementById(`button_container${i}`).style.display = "none";
                }

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;

    }

}

function addQuestion() {

    const a = document.getElementById("lista_preguntas");
    a.innerHTML = `<div class="container-sm">
        <div class="alert alert-primary">
            <span>
                ¿Que tipo de pregunta quiere agregar?
            </span>
        </div>
        
       <div id="button_container1">
        <button id="btn1"
        onclick="Activar(1)"
        class="btn btn-primary mb-3" style="height: 40px; width: 50%;">

            <span>
                Respuesta corta
            </span>

        </button>
       </div>
        <!---
        <div id="button_container2">
            <button id="btn2"
        onclick="Activar(2)"
        class="btn btn-primary mb-3" style="height: 40px; width: 50%;">
            <span>
                Parrafo
            </span>
        </button>
        </div>

       <div id="button_container3">
        <button id="btn3"
        onclick="Activar(3)"
        class="btn btn-primary mb-3" style="height: 40px; width: 50%;">
            <span>
                Varias opciones
            </span>
        </button>
       </div>
       <div id="button_container4">
        <button id="btn4"
        onclick="Activar(4)"
        class="btn btn-primary mb-3" style="height: 40px; width: 50%;">
            <span>
                Casillas
            </span>
        </button>
       </div>---->
    </div>`


}

function Remove(id) {
    const remove = document.getElementById(`divRespuestaCorta${id}`);
    remove.remove();
}



//respuesta corta


function respuesta_corta() {
    const x = parseInt(document.getElementById("input1").value,10);

    //validaciones

    if(x <= 0){
        alert("Cantidad invalida");
        return;
    }

    if (x > 10) {
        alert("¡no puede agrear mas de 10 preguntas!")
        return;
    }


    if (typeof x === "number") {
        for (let i = 1; i <= x; i++) {
            //obteniendo el id del formulario donse se va a poner el formulario de respuesta corta

            const form = document.getElementById("form");

            //creando el div padre con clase container
            const div = document.createElement("div");
            div.className = "mt-2 mb-2 container";
            div.id = "divRespuestaCorta" + i;

            //creando el div hijo con clase row
            const Div_row = document.createElement("div");
            Div_row.className = "row";

            //creando el div hijo que va dentro del div hijo con clase row

            const sub_sub_div1 = document.createElement("div");
            sub_sub_div1.className = "col-sm";

            //creando otro div hijo que va dentro del div hijo con clase row

            const sub_sub_div2 = document.createElement("div");
            sub_sub_div2.className = "col-sm";

            
            if(!document.getElementById("divRespuestaCorta" + i)){
                //metiendo el label dentro del div con container
                div.innerHTML +=
                `
                <input class="short_question" id="PrgCrtInput${i}" value="Pregunta corta"
                type="text">
                `;
                /*metiendo el input y el boton detro de los divs que van dentro de el que tiene
                clase row*/

                sub_sub_div1.innerHTML += `<input  id="RpstCrtInput${i}" type="text" class="form-control" 
                placeholder="Escribe aqui la respuesta corta">
                `;
                sub_sub_div2.innerHTML += `
                <button class="btn btn-outline-danger" onclick="Remove(${i})" >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#dd3449"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
                `;

                /*Organizando los divs entrandolos unos dentro de otros */
                Div_row.append(sub_sub_div1);
                Div_row.appendChild(sub_sub_div2);
                div.append(Div_row);
                form.appendChild(div);
            }
            else{
                return;
            }
            
        }
    }
    else{
        alert("¡Porfavor ingrese un numero valido!")
    }

}





