import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { TodoList } from './components/TodoList';
import { CreateTodo } from './components/CreateTodo';
import { EditTodo } from './components/EditTodo';
import { DeleteTodo } from './components/DeleteTodo';

function App() {
  return (
    <div>
      <nav className="navbar bg-primary navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link" style={{ color: '#FFF' }}>Todos</Link>
          </li>
          <li className="navbar-item" >
            <Link to="/create" className="nav-link" style={{ color: '#FFF' }}>Create Task</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
        <Route path="/delete/:id" component={DeleteTodo}/>
      </Switch>
    </div>

  );
}

export default App;
