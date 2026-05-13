import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

//função para lidar com as requisições recebidas pelo servidor
async function listener(request, response) {
    //chamar o middleware para lidar com o corpo da requisição como JSON
    await jsonHandler(request, response)
    //chamar o middleware para lidar com as rotas
     routeHandler(request, response)
    
}

http.createServer(listener).listen(3333)