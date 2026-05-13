export async function jsonHandler(request, response) {
    //criar um array para armazenar os pedaços de dados recebidos
    const buffers = []

    //iterar sobre os pedaços de dados recebidos e armazená-los no array
    for await (const chunk of request) {
        buffers.push(chunk)
    }

    //concatenar os pedaços de dados e convertê-los para string, depois tentar passar o JSON
    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
        
    } catch (error) {
        //se ocorrer um erro ao tentar passar o JSON, definir o corpo da requisição como null
        request.body = null
    }

    //definir o cabeçalho da resposta para indicar que o conteúdo é JSON
    response.setHeader("content-type", "application/json")
}