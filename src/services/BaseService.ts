import { CrudService } from "../interfaces/CrudService";
class BaseService<T> implements CrudService<T>{
    private _model: CrudService<T>;
    constructor(model: CrudService<T>) {
        this._model = model;
    }
    async getByProperty(input: string): Promise<T> {
        try {
            const response = await this
                ._model
                .getByProperty(input);
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
            const response = await this
                ._model
                .update(id, input);
            return response;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    async delete(id: string): Promise<string> {
        try {
            const response = await this._model.delete(id);
            return response;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
};

export default BaseService;