const express = require("express")
const routes = express.Router()
const TodoController = require("./controllers/TodoController")

//rotas para manipulacao de um TODO
routes.get("/todo/index/", TodoController.index)
routes.get("/todo/show/:id", TodoController.show)
routes.post("/todo/store/", TodoController.store)
routes.put("/todo/update/:id", TodoController.update)
routes.delete("/todo/destroy/:id", TodoController.destroy)

//exportando rotas para o server.js poder utilizar
module.exports = routes