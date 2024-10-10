import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add_todo",
  DELETE_TODO: "delete_todo",
  TOGGLE_TODO: "toggle_todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        { id: Date.now(), name: action.payload.name, complete: false },
      ];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }

        return todo;
      });

    default:
      return todos;
  }
};

const CobaEl = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } });
  };

  const handleToggle = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-10">
      <form onSubmit={handleSubmit}>
        <input
          className="px-5 py-3 border-2 rounded-lg"
          type="text"
          placeholder="Masukkan todo"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>

      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="flex gap-5 items-center">
              <p className={`${todo.complete && "text-red-500"}`}>
                {todo.name}
              </p>
              <button
                className="border-2 text-md font-semibold rounded-md px-5 py-3"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
              <button
                className="border-2 text-md font-semibold rounded-md px-5 py-3"
                onClick={() => {
                  handleToggle(todo.id);
                }}
              >
                Toggle
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CobaEl;
