import react, { useState } from 'react';
import { Tarefa } from '../../models/tarefa.interface';
import Checkbox from '@material-ui/core/Checkbox';
import './todo.scss';

interface TodoInput {
  tarefa: Tarefa;
}

export function Todo({ tarefa }: TodoInput) {
  const [todo, setTodo] = useState<Tarefa>(tarefa);
  const changeCheckbox = (event: boolean) => {
    setTodo({ ...todo, checked: event });
  };
  return (
    <div className="todo-container">
      <Checkbox checked={todo.checked} onChange={(event) => changeCheckbox(event.target.checked)}></Checkbox>
      <span className="todo-name">{todo.name}</span>
    </div>
  );
}