import react from 'react';
import { Input, Button } from '@material-ui/core';
import { Tarefa } from '../../models/tarefa.interface';

interface TodoCreatorInput {
  setTarefa: (tarefa: Tarefa) => any;
}

export function TodoCreator({ setTarefa }: TodoCreatorInput) {
  const getInput = () => {
    const inputNode = document.getElementById('input-todo') as any;
    const tarefa: Tarefa = {
      checked: false,
      name: inputNode.value
    };
    setTarefa(tarefa);
  };

  return (
    <div className="todo-creator">
      <span className="todo-text">Criar nova tarefa</span>
      <Input type="text" id="input-todo"></Input>
      <Button onClick={() => getInput()}>Criar tarefa</Button>
    </div>
  );
}