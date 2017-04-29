import Dispatcher from "../dispatcher";

export function createTodo(text) {
    Dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
};

export function deleteTodos(id) {
    Dispatcher.dispatch({
        type: "CREATE_TODO",
        id
    });
};

export function reloadTodos() {
    Dispatcher.dispatch({ type: "FETCH_TODOS" });
    setTimeout(() => {
        Dispatcher.dispatch({
            type: "RELOAD_TODOS",
            todos: [{
                id: 34351334,
                text: "Hug Bae",
                complete: true
            }, {
                id: 15434524,
                text: "Destroy World",
                complete: false
            }]
        })
    }, 1000);
}