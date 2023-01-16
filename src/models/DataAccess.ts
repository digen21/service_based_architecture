import mongoose, { Schema } from "mongoose";
import { User } from "./UserModel";

class DataAccess {
    getSchema = (schema: any) => {
        return mongoose.model(schema);
    }
}

export default DataAccess;



