// Converted from src/app/pages/dashboard/dashboardTodo/DashboardTodoCtrl.js

import React, { useState } from 'react';
import { useTheme } from 'react-bootstrap';

interface TodoItem {
  text: string;
  color: string;
}

const DashboardTodoCtrl: React.FC = () => {
  const theme = useTheme();
  const dashboardColors = theme.colors.dashboard;
  const colors = Object.values(dashboardColors);

  const getRandomColor = (): string => {
    const i = Math.floor(Math.random() * colors.length);
    return colors[i];
  };

  const [todoList, setTodoList] = useState<TodoItem[]>([
    { text: 'Check me out', color: getRandomColor() },
    { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro', color: getRandomColor() },
    { text: 'Ex has semper alterum, expetenda dignissim', color: getRandomColor() },
    { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.', color: getRandomColor() },
    { text: 'Simul erroribus ad usu', color: getRandomColor() },
    { text: 'Ei cum solet appareat, ex est graeci mediocritatem', color: getRandomColor() },
    { text: 'Get in touch with akveo team', color: getRandomColor() },
    { text: 'Write email to business cat', color: getRandomColor() },
    { text: 'Have fun with blur admin', color: getRandomColor() },
    { text: 'What do you think?', color: getRandomColor() },
  ]);

  const [newTodoText, setNewTodoText] = useState<string>('');

  const addToDoItem = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>, clickPlus: boolean = false) => {
    if (clickPlus || (event as React.KeyboardEvent).key === 'Enter') {
      setTodoList([{ text: newTodoText, color: getRandomColor() }, ...todoList]);
      setNewTodoText('');
    }
  };

  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index} style={{ color: item.color }}>
            {item.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyPress={(e) => addToDoItem(e, false)}
      />
      <button onClick={(e) => addToDoItem(e, true)}>Add</button>
    </div>
  );
};

export default DashboardTodoCtrl;
