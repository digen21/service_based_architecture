import UserService from "../../services/User/UserService";
import BaseController from "../BaseController";


class UserController extends BaseController {
    constructor() {
        super(new UserService());
    }
}

export default UserController;