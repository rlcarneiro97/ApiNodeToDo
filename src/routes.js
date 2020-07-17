const express = require("express")
const routes = express.Router()
const TodoController = require("./controllers/TodoController")

//rotas para manipulacao de um TODO
routes.get("/todo", TodoController.index)
routes.get("/todo/:id", TodoController.show)
routes.post("/todo", TodoController.store)
routes.put("/todo/:id", TodoController.update)
routes.delete("/todo/:id", TodoController.destroy)

//exportando rotas para o server.js poder utilizar
module.exports = routes