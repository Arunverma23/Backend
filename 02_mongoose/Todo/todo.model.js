import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: True,
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  SubTodo: [
    {
      Type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ] // Array of Sub-Todos
}, {timestamps: true})

export const todo = mongoose.model("todo", todoSchema)