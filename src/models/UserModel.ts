import mongoose, { Schema } from "mongoose";
import BaseModel from "./BaseModel";
import DataAccess from "./DataAccess";

class UserModel {
    initSchema() {
        const schema = new Schema({
            name: "string",
            email: "string",
            password: "string",
        });
        mongoose.model("users", schema);
    }
    getInstance() {
        this.initSchema();
        return mongoose.model("users");
    }
}

export default UserModel;




export class User extends BaseModel {
    constructor(model: any) {
        const dataAccess = new DataAccess();
        model = dataAccess.getSchema("users");
        super(model);
    }
}

