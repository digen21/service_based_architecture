import { CrudService, ReadDataService } from "../interfaces/CrudService";
import { Model } from "mongoose";
import { IUser } from "../interfaces/IUser";

class BaseModel<T> implements CrudService<T> {
    private _model: Model<T>;
    constructor(model: Model<T>) {
        this._model = model;
    }
    async getByProperty(input: string): Promise<T> {
        try {
            const response: T = await this._model
                .findOne({ input })
                .lean();
            return response;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    async create(input: T): Promise<T> {
        try {
            const response = await this
                ._model
                .create(input);
            return response;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    async update(id: string, input: T): Promise<T> {
        try {
            // const response: T = await this
            //     ._model
            //     .findOneAndUpdate(id, input, { new: true })
            //     .lean();
            return <T>input;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    async delete(id: string): Promise<string> {
        try {
            const response = await this
                ._model
                .findByIdAndDelete(id);
            return id;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
}

export default BaseModel;
