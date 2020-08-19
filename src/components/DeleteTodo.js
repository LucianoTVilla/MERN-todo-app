import React, {useEffect} from 'react';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';

import { deleteTodo } from '../api'; 

export const DeleteTodo = () => {
  const match = useRouteMatch()

  useEffect( async () => {
    await deleteTodo(match.params.id)
  }, []);

  return(
    <div>
      <h1>Deleted!</h1>
    </div>
  )
} 