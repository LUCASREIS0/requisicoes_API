// Importa a função 'buscaVideo' do módulo './conectaApi.js'
import { conectaApi } from "./conectaApi.js";

// Importa a função 'constroiCard' do módulo './mostrarVideos.js'
import constroiCard from "./mostrarVideos.js";

// Define uma função assíncrona 'buscarVideo' que será chamada quando o botão de pesquisa for clicado
async function buscarVideo(evento) {
    // Previne o comportamento padrão do formulário para evitar o recarregamento da página
    evento.preventDefault();

    // Obtém o valor digitado no campo de pesquisa
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    // Chama a função 'buscaVideo' do módulo 'conectaApi.js' para obter os vídeos correspondentes ao termo de pesquisa
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    // Obtém a referência ao elemento HTML onde os vídeos serão exibidos
    const lista = document.querySelector("[data-lista]");

    // Limpa o conteúdo atual da lista de vídeos
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Para cada vídeo retornado pela busca, constrói um card utilizando a função 'constroiCard' e o adiciona à lista
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
    );

    if (busca.length == 0) {
        // Se o array de resultados da busca estiver vazio, exibe uma mensagem na lista de vídeos
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    }    
}

// Obtém a referência ao botão de pesquisa
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

// Adiciona um ouvinte de eventos ao botão de pesquisa que chama a função 'buscarVideo' quando o botão é clicado
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
