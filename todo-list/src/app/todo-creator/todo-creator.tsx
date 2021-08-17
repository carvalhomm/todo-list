import react from 'react';
import { Input, Button } from '@material-ui/core';
import { Tarefa } from '../../models/tarefa.interface';
import './todo-creator.scss';

interface TodoCreatorInput {
  setTarefa: (tarefa: Tarefa) => any;
}

export function TodoCreator({ setTarefa }: TodoCreatorInput) {
  const getInput = (key: string) => {
    if (key && key === 'Enter') {
      const inputNode = document.getElementById('input-todo') as any;
      const tarefa: Tarefa = {
        checked: false,
        name: inputNode.value
      };
      inputNode.value = '';
      setTarefa(tarefa);
    }
  };

  return (
    <div className="todo-creator">
      <span className="todo-text">Criar nova tarefa</span>
      <Input type="text" id="input-todo" onKeyUp={(event) => getInput(event.key)}></Input>
      <Button className="todo-button" onClick={() => getInput('Enter')}>Criar tarefa</Button>
    </div>
  );
}