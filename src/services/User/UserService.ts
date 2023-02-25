import BaseService from "../BaseService";
import UserModel from "../../models/User/UserModel";
import { IUser } from "../../interfaces/IUser";

class UserService extends BaseService<IUser> {
    constructor() {
        super(new UserModel());
    }
}


export default UserService;