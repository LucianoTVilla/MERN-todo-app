import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TodoList = () => {
const [items, setItems] = useState([]);

useEffect(() => {
  setItems([
    {text: "foo", id: 0},
    {text: "feor", id: 1},
    {text: "foweqweo", id: 2},
    {text: "fwewqeoo", id: 3},
  ])
}, [])
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo App</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(todo => (
                <tr key={todo.id}>
                  <td>
                    {todo.text}
                  </td>
                  <td>
                    <Link to={`/edit/${todo.id}`}>Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}