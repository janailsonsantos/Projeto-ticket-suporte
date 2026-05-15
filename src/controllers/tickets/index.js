export function index({request, response, database}) {

    const {status} = request.query
    
    console.log(status)
    
    const tickets = database.select("tickets") 
    
    // retornar os tickets como resposta
    return response.end(JSON.stringify(tickets))
}