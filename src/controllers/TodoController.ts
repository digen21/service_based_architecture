import TodoService from "../services/TodoService";
import BaseController from "./BaseController";


class TodoController extends BaseController {
    constructor() {
        super(new TodoService());
    }
}

export default TodoController;