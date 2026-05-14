import {randomUUID} from "node:crypto"
import { json } from "node:stream/consumers"

export function create({request, response, database}) {
    // extrair os dados do corpo da requisição
    const { equipment, description, user_name } = request.body

    // criar um novo ticket/objeto com os dados extraídos e um ID único
    const ticket = {
        id: randomUUID(),
        equipment,
        description,
        user_name,
        created_at: new Date(),
        update_at: new Date()
    }

    // inserir o ticket no banco de dados
    database.insert("tickets", ticket)
    // retornar o ticket como resposta
   return response.writeHead(201).end(JSON.stringify(ticket))
}