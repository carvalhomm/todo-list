import react, { useState } from 'react';
import { Tarefa } from '../../models/tarefa.interface';
import { Todo } from '../todo/todo';
import './assignment-list.scss';
interface AssignmentListInput {
  tarefa: Tarefa
}

export function AssignmentList({ tarefa }: AssignmentListInput) {
  console.log('tarefa na llista --> ', tarefa);
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  if (tarefas.length !== 0 && tarefa !== tarefas[tarefas.length - 1]) {
    tarefas.push(tarefa);
    setTarefas(tarefas);
  }
  return (
    <div className="todo-list">
      <h2>Listagem de Tarefas:</h2>
      {
        tarefas.map((tarefa, index) => {
          return <Todo key={index} tarefa={tarefa}></Todo>
        })
      }
    </div>
  );
}