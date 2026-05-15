import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database()

// Função para lidar com as requisições, verificando se a rota existe e chamando o controlador correspondente
export function routeHandler(request, response) {

    // Encontra a rota correspondente à requisição, verificando o método HTTP e testando a URL contra as expressões regulares das rotas
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })

    
    if (route) {
        
        const routeParams = request.url.match(route.path) // Extrai os parâmetros de consulta da URL 

        const {query} = routeParams.groups 

        request.query = query ? extractQueryParams(query) : {} 

        extractQueryParams(query)

        route.controller({request, response, database}) 
    } else {
        response.writeHead(404).end()
    }
}
