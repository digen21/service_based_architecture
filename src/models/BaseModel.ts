import BaseService from "../services/BaseService";
import { Request, Response } from 'express';
import UserModel from "./UserModel";
import DataAccess from "./DataAccess";
import mongoose, { Schema } from "mongoose";



class BaseModel {
    private _model: DataAccess
    constructor(model: DataAccess) {
        this._model = model;
    }

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


export default BaseModel;