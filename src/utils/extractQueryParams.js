
// Função para extrair os parâmetros de consulta da URL
export function extractQueryParams(query) {
    // Retorna objeto vazio se não houver string de consulta
    if (!query) {
        return {}
    }

    // Remove o "?" do início da string, divide os parâmetros por "&" e depois divide cada parâmetro em chave e valor
    return query
    .slice(1) // Remove o "?" do início da string
    .split("&") // Divide os parâmetros por "&"
    .reduce((params, param) => { 
        const [key, value] = param.split("=") // Divide cada parâmetro em chave e valor

        params[key] = value // Adiciona a chave e o valor ao objeto de parâmetros

        return params
    }, {})
}