// components/TaskRegist.jsx
'use client';
import { useState, useEffect } from 'react';
import { createTab } from '../api/api';

export default function TaskRegist() {
  const userId = localStorage.getItem('userId');
  const [taskName, setTaskName] = useState('');
  const [remarks, setRemarks] = useState('');
  

  const handleOk = () => {
    if (!taskName.trim()) {
      alert('タスク名を入力してください');
      return;
    }

    createTab(userId, taskName, remarks); 

    console.log('タスク名:', taskName);
    console.log('備考:', remarks);
    alert('タスクを登録しました');

    setTaskName('');
    setRemarks('');
  };

  const handleCancel = () => {
    setTaskName('');
    setRemarks('');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#fff',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center' }}>タスク登録</h2>

        <div style={{ marginBottom: '15px' }}>
          <label>タスク名:</label><br />
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>備考:</label><br />
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            rows="4"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleOk} style={{ padding: '8px 16px' }}>OK</button>
          <button onClick={handleCancel} style={{ padding: '8px 16px' }}>キャンセル</button>
        </div>
      </div>
    </div>
  );
}
