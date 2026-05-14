import {randomUUID} from "node:crypto"
import { json } from "node:stream/consumers"

export function create({request, response, database}) {
    const { equipment, description, user_name } = request.body

    const ticket = {
        id: randomUUID(),
        equipment,
        description,
        user_name,
        created_at: new Date(),
        update_at: new Date()
    }

    database.insert("tickets", ticket)
   return response.writeHead(201).end(JSON.stringify(ticket))
}