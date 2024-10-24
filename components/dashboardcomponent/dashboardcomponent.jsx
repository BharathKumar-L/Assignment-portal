import "./dashboardcomponent.css"
    import React, { useState } from 'react';

    export  function DashboardComponent() {

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [todos, setTodos] = useState([])

    async function deleteTodoHandler(index) {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    }

    async function addTodoHandler() {
        setTodos((prev) => [...prev, {title:title, description:description}])
    }
    return (
        <div>
            <div className="input-boxes">
                <div>
                    <label htmlFor="">Todo Title</label>
                    <input className="title" type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Todo Description</label>
                    <input className="description" type="text" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="add-todo-div">
                    <button className="add-todo" onClick={addTodoHandler}>Add Todo</button>
                </div>
            </div>
            <div>
                <h1 className="heading">Here's your list of Existing Todos</h1>
                {
                    todos.map((item, index) => {
                        return (
                            <div key={index} className="todo-item">
                                <h3>{item.title}</h3>
                                <h6>{item.description}</h6>
                                <div className="buttons">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn" onClick={() => deleteTodoHandler(index)}>Delete</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
);
}