export function updateStatus({request, response, database}) {
    const { id } = request.params
    const { solution, status } = request.body || {}

    if (!id) {
        response.statusCode = 400
        response.end(JSON.stringify({ error: "id é obrigatório" }))
        return
    }

    const updateData = {}
    if (status) updateData.status = status
    if (solution) updateData.solution = solution

    database.update("tickets", id, updateData)

    response.end()
} 