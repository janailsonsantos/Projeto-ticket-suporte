export function index({request, response, database}) {
    // selecionar os tickets do banco de dados
    const tickets = database.select("tickets")
    // retornar os tickets como resposta
    return response.end(JSON.stringify(tickets))
}