import mongoose, { Schema } from "mongoose";
import UserModel from "./User/UserModel";

class DataAccess {
    getSchema = (model: string) => {
        let userSchema: Schema;
        switch (model) {
            case "users":
                userSchema = new Schema({
                    name: "string",
                    email: "string",
                    password: "string"
                });
                break;
            default:
                throw new Error("Invalid Model");
        }
        return mongoose.model(model, userSchema);
    }
}

export default DataAccess;



