import mongoose from 'mongoose';

const SubTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: True,
    },
    complete: {
      type: Boolean,
      default: False,
    },
    CreatedBy: {
      Type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
  },
  { timestaps: true }
);

export const SubTodo = mongoose.model('SubTodo', SubTodoSchema);