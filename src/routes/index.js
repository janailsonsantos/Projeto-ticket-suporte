import { tickets } from "./tickets.js";
import { parseRoutePath } from "../utils/parseRoutPath.js";

// mapeia as rotas, convertendo os caminhos de string para expressões regulares usando a função parseRoutePath
export const routes = [...tickets].map((route) => ({
...route,

path: parseRoutePath(route.path)
}))