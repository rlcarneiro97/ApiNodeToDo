const express = require("express")
const mongoose = require("mongoose")
const requireDir = require("require-dir")
const cors = require("cors")
require("dotenv").config()
//express usado para criacao de rotas
const app = express()
//habilitando o uso de json nas requisisoes do express
app.use(express.json())
//liberando projeto pra dominio publico com o cors
app.use(cors())
//conectando ao mongodb e verificando se vem ou nao erro.
//endereco para teste local = "mongodb://localhost:27017/todolist"
mongoose.connect(process.env.MONGO_LOCAL_HOST, {useUnifiedTopology:true, useNewUrlParser: true, useCreateIndex: true})
const db = mongoose.connection
db.on("Error", console.error.bind(console, "connection error: "))
db.once("open", function(){})

//usando o require dir pra importar todas as regras de negocio da pasta models
requireDir("./src/models")
//rota raiz da aplicacao
app.use("/", require("./src/routes"))
//api ouvindo a porta 3000 
app.listen(process.env.PORT || 3000)