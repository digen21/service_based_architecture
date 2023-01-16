import mongoose, { Schema } from "mongoose";

class TodoModel {
    initSchema() {
        const schema = new Schema({
            desc: "string"
        });
        mongoose.model("todos", schema);
    }
    getInstance() {
        this.initSchema();
        return mongoose.model("todos");
    }
}

export default TodoModel;