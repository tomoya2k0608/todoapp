// components/TabRegist.jsx
'use client';
import { useState, useEffect } from 'react';
import { addTask } from "../api/api";

export default function TabRegist( userId ) {
  console.log(userId.userId);
  const [TabName, setTabName] = useState('');
  const [TabNote, setTabNote] = useState('');

  const handleOk = async () => {
    try {
      await addTask(userId.userId,TabName,TabNote);
    } catch (error) {
        setErrorMessage("システムエラーです。運営に連絡お願いいたします。");
    }
    console.log('タブ名:', TabName);
    console.log('備考:', TabNote);
    alert('タブを登録しました');
    setTabName('');
    setTabNote('');
    onClose(); 
  };

  const handleCancel = () => {
    setTabName('');
    setTabNote('');
    onClose(); 
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
        <h2 style={{ textAlign: 'center' }}>タブ登録</h2>

        <div style={{ marginBottom: '15px' }}>
          <label>タブ名:</label><br />
          <input
            type="text"
            value={TabName}
            onChange={(e) => setTabName(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>備考:</label><br />
          <textarea
            value={TabNote}
            onChange={(e) => setTabNote(e.target.value)}
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
