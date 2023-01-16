import BaseService from "./BaseService";
import TodoModel from "../models/TodoModel";

class TodoService extends BaseService {
    constructor() {
        super(new TodoModel())
    }
}


export default TodoService;