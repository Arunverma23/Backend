import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      tyoe: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [True, "Password is required"]
    }
  }, {timestamps: True}
)

export const User = mongoose.model("User", userSchema)