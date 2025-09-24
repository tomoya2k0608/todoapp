// components/Tab.jsx
'use client';
import React, { useState } from 'react';
import TabEdit from './TabEdit';

export default function Tab({ tab, isActive, onClick }) {
    console.log(tab)
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            {/* タブボタン */}
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

            {/* プラスアイコン → 編集アイコン代わり */}
            <i class="fa-solid fa-plus"></i>

            {/* モーダル */}
            {isOpen && (
                <div
                    onClick={handleClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    {/* モーダル内クリックで閉じないように */}
                    <div onClick={(e) => e.stopPropagation()}>
                        <TabEdit
                            tabId={tab.tabId}
                            tabName={tab.tabName}
                            tabNote={tab.tabNote}
                            onClose={handleClose}  // 編集後に閉じたい場合用
                        />
                    </div>
                </div>
            )}
        </div>
    );
}