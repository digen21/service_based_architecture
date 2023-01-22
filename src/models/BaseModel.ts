import { CrudService, ReadDataService } from "../interfaces/CrudService";
import { Model } from "mongoose";
import { IUser } from "../interfaces/IUser";

class BaseModel<T> implements CrudService<T>, ReadDataService<T>{
    private _model: Model<T>;
    constructor(model: Model<T>) {
        this._model = model;
    }
    async getById(input: IUser): Promise<T> {
        try {
            console.log(input);
            const response = await this._model.findById(input);
            return <T>response;
        } catch (error) {
            throw new Error("No User Exists.");
        }

    }
    async getByEmail(input: IUser): Promise<T> {
        try {
            console.log(input);

            const email = input.email;
            const response = await this._model.findOne({ email });
            console.log("Model : ", response);
            return <T>response;
        } catch (error) {
            throw new Error("Method not implemented.");

        }

    }
    async get(input: IUser): Promise<T> {
        try {
            const id = input.id;
            const response = await this._model.findById(id);
            return await <T>(response);
        } catch (error) {
            throw new Error("Method not implemented.");
        }

    }
    async delete(input: IUser): Promise<T> {
        try {
            const id = input.id;
            const response = await this._model.findByIdAndDelete(id)
            return <T>response;

        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    async create(data: IUser): Promise<T> {
        try {
            const user = this._model.create(data);
            return user;
        } catch (error) {
            throw new Error();
        }
    }

    async update(input: IUser): Promise<T> {
        try {
            const id = input.id;
            const { name, email } = input;
            const response = await this._model.findByIdAndUpdate(
                id,
                { name, email },
                { new: true }
            );
            return <T>response;
        } catch (error) {
            throw new Error();
        }
    }
}

export default BaseModel;
