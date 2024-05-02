// Importa a função `conectaApi` do arquivo "conectaApi.js"
import { conectaApi } from "./conectaApi.js";

// Seleciona o elemento do DOM com o atributo `[data-lista]` e armazena em `lista`
const lista = document.querySelector("[data-lista]");

// Define uma função `constroiCard` que cria um elemento de vídeo com título, descrição, URL e imagem
function constroiCard(titulo, descricao, url, imagem) {
    // Cria um elemento `li` para representar um item de vídeo
    const video = document.createElement("li");
    // Adiciona a classe CSS `videos__item` ao elemento `li`
    video.className = "videos__item";
    // Define o HTML interno do elemento `li` com os dados fornecidos
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`;
    // Retorna o elemento `li` criado
    return video;
}

// Define uma função assíncrona `listaVideos` que lista os vídeos da API
async function listaVideos() {
    // Aguarda a resposta da função `listaVideos` da API
    const listaApi = await conectaApi.listaVideos();
    // Para cada elemento na lista da API, cria um card de vídeo e o adiciona à lista no DOM
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

// Chama a função `listaVideos` para iniciar o processo de listar os vídeos
listaVideos();


