// app/todo/page.jsx (Next.js App Router／クライアントコンポーネント)
'use client';

import { useState, useEffect } from 'react';
import Tab from '../components/Tab';
import TaskList from '../components/TaskList';
import { fetchTabs } from '../api/api';
import TabRegist from '../components/TabRegist';

export default function TodoPage() {
    const userId = localStorage.getItem('userId');
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    // ① 全タブ一覧と、② 選択中タブID を state で管理
    const [tabs, setTabs] = useState([]);
    const [activeTabId, setActiveTabId] = useState(null);

    // マウント時にタブをフェッチ
    useEffect(() => {
        async function load() {
            const data = await fetchTabs(userId);
            console.log();
            setTabs(data);
            if (data.length > 0) {
                setActiveTabId(data[0].id);  // 最初のタブを自動選択（任意）
            }
        }
        load();
    }, [userId]);

    return (
        <div className="todo-container" style={{
            display: 'flex',
            height: '100vh'
        }}>
            {/* サイドバーにタブ一覧をループ描画 */}
            <nav className="tab-sidebar" style={{
                width: 200, borderRight: '1px solid #ddd', padding: 16
            }}>
                {tabs.map(tab => (
                    <Tab
                        key={tab.tabId}
                        tab={tab}
                        isActive={tab.tabId === activeTabId}
                        onClick={() => setActiveTabId(tab.tabId)}
                    />
                ))}
            <img 
                src="/plus.png" 
                alt="プラスアイコン"
                style={{ cursor: 'pointer' }}
                onClick={handleOpen}
            />
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
                    {/* 背景クリックで閉じられないようにする場合は以下を変更 */}
                    <div onClick={(e) => e.stopPropagation()}>
                        <TabRegist userId={userId}/>
                    </div>
                </div>
            )}
            </nav>

            {/* 選択中タブに応じて TaskList を表示 */}
            <main className="task-area" style={{ flex: 1, padding: 16 }}>
                {activeTabId ? (
                    <TaskList userId={userId} tabId={activeTabId} />
                ) : (
                    <p>タブを選択してください。</p>
                )}
            </main>
        </div>
    );
}
