import React, { useState } from "react";

const AddTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form className="d-flex mt-5 col-md-8 mx-auto" onSubmit={onSubmitForm}>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
