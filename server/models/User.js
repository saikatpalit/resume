// 


import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,

    isGuest: {
      type: Boolean,
      default: false
    },

    guestExpiresAt: {
      type: Date,
      default: null
    }

  },
  { timestamps: true }
);


UserSchema.index(
  { guestExpiresAt: 1 },
  { expireAfterSeconds: 0 }
);


UserSchema.methods.comparePassword = function (password) {

  if (!this.password) return false;

  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

export default User;
