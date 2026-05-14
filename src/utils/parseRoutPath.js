export function parseRoutePath(path) {
    const routeParamentersRegex = /:([a-zA-Z]+)/g

    const paramns = path.replaceAll(routeParamentersRegex, "(?<$1>[a-zA-Z0-9-_]+)")

    const pathRegex = new RegExp(`^${paramns}$(?<query>\\?(.*))?$`)

    return pathRegex
}