import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: "Invalid Email Address",
      },
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//This hook works between when we ge the data and when its persisted to db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next()
});

const User = mongoose.model("User", userSchema);

export default User;
