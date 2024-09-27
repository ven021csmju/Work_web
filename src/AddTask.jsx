import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');  // สร้าง state สำหรับข้อความที่กรอก

  // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม Submit
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) { // ตรวจสอบว่าข้อความไม่ใช่ช่องว่าง
      onAddTask(text); // ส่งข้อความที่กรอกไปยังฟังก์ชัน onAddTask
      setText('');     // เคลียร์ข้อความในฟอร์มหลังจากส่งไปแล้ว
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
