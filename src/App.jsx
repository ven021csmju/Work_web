import React, { useReducer, useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import tasksReducer from './tasksReducer.jsx';

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // ฟังก์ชันสำหรับเพิ่มข้อมูลใหม่
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++, // สร้าง ID สำหรับ task ใหม่
      text: text,   // ข้อความที่เพิ่มเข้าไป
    });
  }

  // ฟังก์ชันสำหรับเปลี่ยนแปลงข้อมูลใน Task
  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  // ฟังก์ชันสำหรับลบ Task
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Task List App</h1>
      {/* ส่วนฟอร์มสำหรับเพิ่ม task ใหม่ */}
      <AddTask onAddTask={handleAddTask} />

      {/* แสดงรายการ Task */}
      <TaskList
        tasks={tasks} 
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
