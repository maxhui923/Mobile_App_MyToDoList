/**
 * cprg303 lab3 My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';
import { useState } from 'react';



function App() {

  const [tasks, settasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return <SafeAreaView>
    <ToDoList tasks={tasks} />
    <ToDoForm />
  </SafeAreaView>;
}

export default App;
