import React, { useState } from 'react';
import './App.scss';
import { TodoCreator } from './app/todo-creator/todo-creator';
import { AssignmentList } from './app/assignment-list/assignment-list';
import { Tarefa } from './models/tarefa.interface';

function App() {
  const [tarefa, setTarefa] = useState<Tarefa>();
  return (
    <div className="todo-list">
      <TodoCreator setTarefa={setTarefa}></TodoCreator>
      <AssignmentList tarefa={tarefa}></AssignmentList>
    </div>
  );
}

export default App;
