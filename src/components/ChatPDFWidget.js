// src/components/ChatPDFWidget.js
import React, { useState, useRef, useEffect } from 'react';

const CHATPDF_API_KEY = '保密！'; // ⚠ 仅本地测试用，勿用于线上！

const primaryColor = '#A026FF'; // ChatPDF 蓝色
const assistantBg = '#f1f5f9';
const userBg = '#e0e7ff';

export default function ChatPDFWidget() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat, loading]);

  const handleFileUpload = async (e) => {
    setError('');
    const file = e.target.files[0];
    if (!file) return;
    setPdfFile(file);
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('https://api.chatpdf.com/v1/sources/add-file', {
        method: 'POST',
        headers: {
          'x-api-key': CHATPDF_API_KEY,
        },
        body: formData,
      });
      const data = await res.json();
      if (data.sourceId) {
        setSourceId(data.sourceId);
        setChat([]);
      } else {
        setError('上传失败，请检查文件格式和大小');
      }
    } catch {
      setError('上传失败，请检查网络');
    }
    setLoading(false);
  };

  const handleAsk = async () => {
    setError('');
    if (!sourceId || !question) return;
    setLoading(true);
    const messages = [
      ...chat.map((item) => ({
        role: item.role,
        content: item.content,
      })),
      { role: 'user', content: question },
    ].slice(-6);
    try {
      const res = await fetch('https://api.chatpdf.com/v1/chats/message', {
        method: 'POST',
        headers: {
          'x-api-key': CHATPDF_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceId, messages }),
      });
      const data = await res.json();
      if (data.content) {
        setChat([
          ...chat,
          { role: 'user', content: question },
          { role: 'assistant', content: data.content },
        ]);
        setQuestion('');
      } else {
        setError('AI 没有返回答案，请重试');
      }
    } catch {
      setError('提问失败，请检查网络');
    }
    setLoading(false);
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
      maxWidth: 480,
      margin: '40px 0',
      padding: 0,
      fontFamily: 'system-ui, sans-serif',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{
        background: primaryColor,
        color: '#fff',
        borderRadius: '16px 16px 0 0',
        padding: '12px 24px',
        fontWeight: 600,
        fontSize: 20,
        letterSpacing: 1
      }}>
        ChatPDF
      </div>

      {/* 上传区域 */}
      <div style={{ padding: '20px 24px 0 24px' }}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 500, color: '#222', marginRight: 8 }}>上传 PDF 文件：</label>
          <label
            style={{
              display: 'inline-block',
              background: primaryColor,
              color: '#fff',
              borderRadius: 6,
              padding: '4px 12px',
              fontWeight: 500,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: 13,
              transition: 'background 0.2s',
              border: 'none',
              boxShadow: '0 1px 4px 0 rgba(37,99,235,0.08)',
              position: 'relative',
              verticalAlign: 'middle'
            }}
          >
            <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>选择文件</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              disabled={loading}
              style={{
                opacity: 0,
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            />
          </label>
          {pdfFile && (
            <span style={{
              marginLeft: 12,
              color: '#555',
              fontSize: 14,
              verticalAlign: 'middle',
              maxWidth: 180,
              display: 'inline-block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {pdfFile.name}
            </span>
          )}
        </div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          {sourceId && (
            <span style={{ color: '#22c55e', fontWeight: 500, marginRight: 8 }}>上传成功</span>
          )}
          当前 PDF SourceId: <b style={{ color: primaryColor }}>{sourceId}</b>
        </div>
      </div>

      {/* 聊天框 */}
      <div
        ref={chatBoxRef}
        style={{
          background: '#f8fafc',
          minHeight: 260,
          maxHeight: 340,
          overflowY: 'auto',
          padding: '16px 24px 8px 24px',
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb'
        }}>
        {chat.length === 0 && (
          <div style={{ color: '#888', textAlign: 'center', marginTop: 40 }}>
            <span>请上传 PDF 后提问</span>
          </div>
        )}
        {chat.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: item.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 10
            }}
          >
            <div style={{
              background: item.role === 'user' ? userBg : assistantBg,
              color: '#222',
              borderRadius: 12,
              padding: '10px 16px',
              maxWidth: '80%',
              fontSize: 15,
              boxShadow: item.role === 'user'
                ? '0 2px 8px 0 rgba(37,99,235,0.08)'
                : '0 2px 8px 0 rgba(0,0,0,0.04)',
              border: item.role === 'user'
                ? `1px solid ${primaryColor}`
                : '1px solid #e5e7eb'
            }}>
              <b style={{ color: item.role === 'user' ? primaryColor : '#0ea5e9', fontWeight: 500 }}>
                {item.role === 'user' ? '你' : 'AI'}
              </b>
              <div style={{ marginTop: 2, whiteSpace: 'pre-wrap' }}>{item.content}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ color: '#888', textAlign: 'center', margin: 10 }}>
            <span>AI 正在思考...</span>
          </div>
        )}
      </div>

      {/* 输入提问区域 */}
      <div style={{ padding: '16px 24px 20px 24px', background: '#fff', borderRadius: '0 0 16px 16px'}}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="请输入你的问题"
            style={{
              flex: 1,
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 8,
              fontSize: 15
            }}
            disabled={loading || !sourceId}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAsk();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAsk}
            disabled={loading || !sourceId || !question}
            style={{
              background: primaryColor,
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '8px 22px',
              fontWeight: 600,
              fontSize: 15,
              cursor: loading || !sourceId || !question ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s'
            }}
          >发送</button>
        </div>
        {error && <div style={{ color: '#dc2626', marginTop: 8 }}>{error}</div>}
      </div>
    </div>
  );
}
