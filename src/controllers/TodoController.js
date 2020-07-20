const mongoose = require("mongoose")
const Todo = mongoose.model("Todo")

module.exports = {
    
    //lista TODOs com paginacao
    async index(req, res){
        const {page = 1} = req.query
        const todo = await Todo.paginate({}, {page, limit: 8})
        return res.json(todo)
    },

    //mostra um TODO em especifico
    async show(req, res){
        const todo = await Todo.findById(req.params.id)
        return res.json(todo)
    },

    //cria um novo TODO
    async store(req, res){
        const todo = await Todo.create(req.body)
        return res.json(todo)
    },

    //atualiza um TODO existente
    async update(req, res){
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(todo)
    },

    //deleta um TODO
    async destroy(req, res){
        await Todo.findByIdAndRemove(req.params.id)
        return res.send()
    }
}