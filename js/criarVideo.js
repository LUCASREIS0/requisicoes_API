// Importando a função 'conectaApi' do arquivo 'conectaApi.js'
import { conectaApi } from "./conectaApi.js";

// Selecionando o elemento do formulário usando um atributo de dados
const formulario = document.querySelector("[data-formulario]");

// Função assíncrona para criar um vídeo quando o formulário for enviado
async function criarVideo(evento) {
    // Evitando o comportamento padrão de envio do formulário para evitar recarregamento da página
    evento.preventDefault();

    // Obtendo os valores dos campos do formulário
    const imagem = document.querySelector("[data-imagem]").value; // Obtém o valor do campo de imagem do formulário
    const url = document.querySelector("[data-url]").value; // Obtém o valor do campo de URL do formulário
    const titulo = document.querySelector("[data-titulo]").value; // Obtém o valor do campo de título do formulário
    
    // Gerando uma descrição aleatória para o vídeo
    // Aqui estamos gerando uma descrição aleatória para o vídeo utilizando um número aleatório entre 0 e 9 e convertendo para string
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        // Chamando a função assíncrona 'criaVideo' da API, passando os dados do vídeo
        // Esperamos até que a função 'criaVideo' seja concluída antes de continuar
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        // Redirecionando para uma página de conclusão após o vídeo ser criado
        // Após o vídeo ser criado com sucesso, redirecionamos o usuário para uma página de conclusão
        window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    }
}

// Adicionando um ouvinte de evento de envio ao formulário
// Quando o formulário é enviado, a função 'criarVideo' é chamada para lidar com o envio do formulário
formulario.addEventListener("submit", evento => criarVideo(evento));
