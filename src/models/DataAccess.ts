import mongoose, { Schema } from "mongoose";

class DataAccess<T>{
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
        return mongoose.model<T>(model, userSchema);
    }
}

export default DataAccess;



