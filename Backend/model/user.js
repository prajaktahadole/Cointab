import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  picture: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  gender: { type: String, required: true },
  email: String,
  location: String,
  pin: String,
});

const Users = model("user", UserSchema);
export default Users;
