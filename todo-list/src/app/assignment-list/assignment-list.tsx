import react from 'react';
import { Tarefa } from '../../models/tarefa.interface';

interface AssignmentListInput {
  tarefa: Tarefa
}

export function AssignmentList({ tarefa }: AssignmentListInput) {
  return (
    <div>
      LISTA
    </div>
  );
}