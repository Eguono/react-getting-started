import { EventEmitter } from "events";

import Dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [{
            id: 113464613,
            text: "Go Shopping",
            complete: false
        }, {
            id: 235684679,
            text: "Pay Water Bills",
            complete: false
        }];
    }

    getAll(){
        return this.todos;
    }

    createTodo(text){
        let id = Date.now();
        this.todos.push({
            id,
            text,
            complete:false

        });
        this.emit("change");
    }

    handleAction(action){
        switch (action.type){
            case "CREATE_TODO":
                this.createTodo(action.text);
            case "RELOAD_TODOS":
                this.todos = action.todos;
        }
        this.emit("change");
    }
};

const todoStore = new TodoStore;
Dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;