import React, {useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';

import { deleteTodo } from '../api'; 

export const DeleteTodo = () => {
  const match = useRouteMatch();

  useEffect(() => {
    deleteTodo(match.params.id)
  });

  return(
    <div>
      <h1>Deleted!</h1>
    </div>
  )
} 