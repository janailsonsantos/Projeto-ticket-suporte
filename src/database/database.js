import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
    // propriedade privada para armazenar os dados do banco de dados
    #database = {}

    // construtor para ler o arquivo do banco de dados ou criar um novo se não existir
    constructor() {
        fs.readFile(DATABASE_PATH, "utf8")
            .then((data) => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }

    // método para persistir os dados no arquivo do banco de dados
    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    // método para inserir um novo registro no banco de dados
    insert(table, data) {
        
        if(Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        
        this.#persist()
    }

    // método para selecionar e mostrar os registros do banco de dados
    select(table, filters) {
        let data = this.#database[table] ?? []

        if (filters) {
            data = data.filter((row) => {
                const test = Object.entries(filters).some(([key, value]) => {
                    return row[key] ? String(row[key]).toLowerCase().includes(String(value).toLowerCase()) : false
                })

                console.log(test)
                return test
        })}

        return data
    }

    update(table, id, data) {
        const rowIndex = this.#database[table].findIndex((row) => row.id === id)

        if (rowIndex > -1) {
            this.#database[table][rowIndex] = {
                ...this.#database[table][rowIndex],
                ...data
            
            }
            this.#persist()
        }
    }
    

}