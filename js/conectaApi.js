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

// Exporta um objeto chamado conectaApi, que contém a função listaVideos
export const conectaApi = {
    listaVideos
}
