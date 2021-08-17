import react, { useEffect, useState } from 'react';
import { Tarefa } from '../../models/tarefa.interface';
import { Todo } from '../todo/todo';
import './assignment-list.scss';
interface AssignmentListInput {
  tarefa: Tarefa;
  setTarefa: (tarefa: Tarefa) => void;
}

export function AssignmentList({ tarefa, setTarefa }: AssignmentListInput) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  if (tarefa && !tarefas.find(tt => tt.name === tarefa.name)) {
    tarefas.push(tarefa);
  }

  useEffect(() => {
    setTarefas(tarefas);
    setTarefa(null);
  }, [tarefa]);

  const removeTodo = (tarefa: Tarefa) => {
    const novasTarefas: Tarefa[] = [];
    for (const tt of tarefas) {
      if (tt.name !== tarefa.name) {
        novasTarefas.push(tt);
      }
    }
    setTarefas(novasTarefas);
  };

  console.log('array a ser visto --> ', tarefas);
  return (
    <div className="todo-list">
      <h2>Listagem de Tarefas:</h2>
      {
        tarefas.map((tarefa) => {
          return <Todo key={tarefa.name} tarefa={tarefa} removeTodo={removeTodo} ></Todo>
        })
      }
    </div>
  );
}