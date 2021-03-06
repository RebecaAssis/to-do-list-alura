    import BotaoConclui from "./componentes/concluiTarefa.js"
    import BotaoDeleta from "./componentes/deletaTarefa.js"

    const elementoPai = document.querySelector("[data-div-app]");
    const elementoReferencia = document.querySelector("[data-to-do-list]")
    const tituloPrincipal = document.createElement("p");

    tituloPrincipal.classList.add("main-title");
    tituloPrincipal.innerText = "To-do List";
    elementoPai.insertBefore(tituloPrincipal, elementoReferencia);

    const criarTarefa = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;  

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = "";
}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);