// components/TabEdit.jsx
'use client';
import { useState, useEffect } from 'react';
import { updateTab  } from "../api/api";

export default function TabEdit({ tabId, tabName, tabNote, onClose }) {
  console.log('ito');
  const userId = localStorage.getItem('userId');
  console.log(userId);
  const [TabName, setTabName] = useState('');
  const [TabNote, setTabNote] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 初期値を props からセット
  useEffect(() => {
    setTabName(tabName || '');
    setTabNote(tabNote || '');
  }, [tabName, tabNote]);

  const handleOk = async () => {
    try {
      await updateTab(userId,tabId,TabName,TabNote);
      console.log('タブ更新:', { tabId, TabName, TabNote });
      alert('タブを更新しました');
    } catch (error) {
      setErrorMessage("システムエラーです。運営に連絡お願いいたします。");
    }
    onClose();
  };

  const handleCancel = () => {
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
        <h2 style={{ textAlign: 'center' }}>タブ編集</h2>

        {errorMessage && (
          <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>
        )}

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