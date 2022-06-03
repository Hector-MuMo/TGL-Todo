import { getData } from "../../utils/axios";

const todosReducer = (state, action) => {
    switch (action.type) {
        case "get-todos":
            state = { ...state, todos: action.payload }
            return state;

        case "reload-todos":
            state = { ...state, reloadTodos: !state.reloadTodos }

            return state;

        default:
            throw new Error();
    }
}

export default todosReducer