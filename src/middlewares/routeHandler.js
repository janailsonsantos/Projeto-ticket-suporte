import { routes } from "../routes/index.js";


export function routeHandler(request, response) {{
    const route = routes.find((route) => {
        return route.method === request.method && route.path === request.url
    })

    if (route) {
        route.controller(request, response)
    } else {
        response.writeHead(404).end()
    }
    }
}