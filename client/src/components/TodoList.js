import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoDescription, setTodoDescription] = useState("");
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateTodo = async (id) => {
    const newTodo = {
      id,
      description: todoDescription,
    };
    try {
      const response = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="mt-5 col-md-8 mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "80%" }}>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target={`#id${todo.id}`}
                    onClick={() => setTodoDescription(todo.description)}
                  >
                    Edit
                  </button>
                  <div id={`id${todo.id}`} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Edit Todo</h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={() => updateTodo(todo.id)}>
                            <div className="form-group">
                              <label>Enter new description:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="usr"
                                value={todoDescription}
                                onChange={(event) =>
                                  setTodoDescription(event.target.value)
                                }
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-dismiss="modal"
                              onClick={() => updateTodo(todo.id)}
                            >
                              Edit
                            </button>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
