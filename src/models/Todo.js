const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const TodoSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },
})

//apontar que esse schema usa paginacao
TodoSchema.plugin(mongoosePaginate)
//criando schema de Product
mongoose.model("Todo", TodoSchema)