import BaseService from "../BaseService";
import UserModel from "../../models/User/UserModel";

class UserService extends BaseService {
    constructor() {
        super(new UserModel());
    }
}


export default UserService;