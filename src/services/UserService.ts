import BaseService from "./BaseService";
import UserModel from "../models/UserModel";

class UserService extends BaseService {
    constructor() {
        super(new UserModel())
    }
}


export default UserService;