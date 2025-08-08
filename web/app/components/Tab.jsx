// components/Tab.jsx
'use client';
import React from 'react';

export default function Tab({ tab, isActive, onClick }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <button
                onClick={onClick}
                style={{
                    flexGrow: 1,
                    padding: '8px 12px',
                    textAlign: 'left',
                    background: isActive ? '#e0f7fa' : 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                {tab.tabName}
            </button>
            <img 
                src="/plus.png" 
                alt="プラスアイコン"
                style={{ cursor: 'pointer', marginLeft: 8 }}
            />
        </div>
    );
}