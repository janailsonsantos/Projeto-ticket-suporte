export function parseRoutePath(path) {
    // Expressão regular para encontrar os parâmetros de rota, que começam com ":" e são seguidos por letras
    const routeParamentersRegex = /:([a-zA-Z]+)/g

    // Substitui os parâmetros de rota por expressões regulares que capturam os valores correspondentes na URL
    const paramns = path.replaceAll(routeParamentersRegex, "(?<$1>[a-zA-Z0-9-_]+)")

    // Cria uma expressão regular final que corresponde à rota completa, incluindo os parâmetros e uma possível string de consulta no final
    const pathRegex = new RegExp(`^${paramns}(?<query>\\?(.*))?$`)

    return pathRegex
}