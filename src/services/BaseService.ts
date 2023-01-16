import UserModel from "../models/UserModel";

class BaseService {
    private _dbController;
    constructor(model: UserModel) {
        this._dbController = model;
    }

    create = async (data: any) => {
        data = await this._dbController.getInstance().create(data);
        console.log(data);
        return data;
    }
};

export default BaseService;