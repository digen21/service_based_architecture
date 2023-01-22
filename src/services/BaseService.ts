import UserModel from "../models/User/UserModel";
import { IUser } from "../interfaces/IUser";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class BaseService {
    private _model: UserModel;
    constructor(model: UserModel) {
        this._model = model;
    }

    async create(input: IUser) {
        const response = await this._model.create(input);
        return response;
    }

    async update(input: IUser) {
        console.log("Service : ", input);

        const response = await this._model.update(input);
        return response;
    }

    async delete(input: IUser) {
        const response = await this._model.delete(input);
        return response;
    }

    async getByEmail(input: IUser) {
        const response = await this._model.getByEmail(input);
        return response;
    }


    async getById(input: IUser) {
        const response = await this._model.getById(input);
        return response;
    }

};

export default BaseService;