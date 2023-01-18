import UserModel from "../models/User/UserModel";
import { IUser } from "../interfaces/IUser";
class BaseService {
    private _model: UserModel;
    constructor(model: UserModel) {
        this._model = model;
    }

    create(data: IUser) {
        const user = this._model.create(data);
        return user;
    }


};

export default BaseService;