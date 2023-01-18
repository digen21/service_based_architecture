
import { Model } from "mongoose";
import { IUser } from "../interfaces/IUser";



class BaseModel<T> {
    private _model: Model<T>
    constructor(model: Model<T>) {
        this._model = model;
    }

    create(data: IUser) {
        const user = this._model.create(data);
        return user;
    }
}


export default BaseModel;