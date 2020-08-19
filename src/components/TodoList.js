import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../api';

export const TodoList = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos();
      setItems(todos);
    }
    fetchItems()
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>To-Do List</h3>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">Tasks</th>
              <th scope="col">Action</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(todo => (
                <tr key={todo._id}>
                  <td>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    {todo.text}
                  </td>
                  <td>
                    <Link to={`/edit/${todo._id}`}>Edit</Link>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      <Link to={`/delete/${todo._id}`} style={{ color: '#FFF' }}>Delete</Link>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button type="button" className="btn btn-primary">
          <Link to={`/create`} style={{ color: '#FFF' }}>Create Task</Link>
        </button>
      </div>
    </div>
  )
}