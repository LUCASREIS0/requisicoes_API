// Define uma função assíncrona chamada listaVideos
async function listaVideos() {
    // Realiza uma solicitação para o servidor local para obter a lista de vídeos
    const conexao = await fetch("http://localhost:3000/videos"); 

    // Converte a resposta da solicitação para JSON
    const conexaoConvertida = await conexao.json();

    // Exibe os dados recebidos da API em formato de tabela no console do navegador
    console.table(conexaoConvertida);

    // Retorna os dados recebidos da API
    return conexaoConvertida;
}

//Define uma função assíncrona chamada criaVideo
async function criaVideo(titulo, descricao, url, imagem) {
    // Realiza uma solicitação POST para enviar os dados do novo vídeo para o servidor
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", // Método HTTP POST para enviar dados
        headers: {
            "Content-type": "application/json" // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify({ // Converte os parâmetros para um objeto JSON
            titulo: titulo, // Título do vídeo
            descricao: `${descricao} mil visualizações`, // Descrição do vídeo com visualizações simuladas
            url: url, // URL do vídeo
            imagem: imagem // URL da imagem do vídeo
        })
    }); 

    // Converte a resposta da solicitação para JSON
    const conexaoConvertida = conexao.json();

    // Retorna a resposta convertida
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    // Realiza uma requisição GET para o servidor local na porta 3000, passando o termo de busca como parte da query string
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    
    // Converte a resposta da requisição para JSON
    const conexaoConvertida = await conexao.json();

    // Retorna os dados convertidos
    return conexaoConvertida;
}

// Exporta um objeto chamado conectaApi, que contém as funções listaVideos e criaVideo
export const conectaApi = {
    listaVideos, // Função para listar vídeos
    criaVideo, // Função para criar um novo vídeo
    buscaVideo // Função para Buscar vídeos
}