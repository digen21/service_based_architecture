import BaseModel from "../BaseModel";
import DataAccess from "../DataAccess";
import { IUser } from "../../interfaces/IUser";

export class UserModel extends BaseModel<IUser>{
    constructor() {
        const dataAccess = new DataAccess<IUser>();
        const model = dataAccess.getSchema("users");
        super(model);
    }
}

export default UserModel;
