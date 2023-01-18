import mongoose, { Schema } from "mongoose";
import BaseModel from "../BaseModel";
import DataAccess from "../DataAccess";

export class UserModel extends BaseModel<any>{
    constructor() {
        const dataAccess = new DataAccess();
        const model: any = dataAccess.getSchema("users");
        super(model);
    }
}

export default UserModel;
