import React from 'react';
import { useHistory } from 'react-router-dom';

import { TodoForm } from './TodoForm';
import { createTodo } from '../api';

export const CreateTodo = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createTodo(data)
    history.push("/")
  };
  return(
    <div className="container">
      <div className="mt-3">
        <h3>Create Task</h3>
        <TodoForm onSubmit={onSubmit}/>
      </div>
    </div>
  ) 
}