async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); 
    const conexaoConvertida = await conexao.json();
    console.table(conexaoConvertida);

    return conexaoConvertida
}

export const copnectaApi = {
    listaVideos
}