import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState('Testing...');
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      setConnectionStatus('Connecting to backend...');
      setError(null);
      
      // Test the health endpoint
      const response = await api.get('/health');
      
      if (response.data) {
        setConnectionStatus('✅ Connected Successfully!');
        setBackendData(response.data);
      }
    } catch (err) {
      setConnectionStatus('❌ Connection Failed');
      setError(err.message || 'Failed to connect to backend');
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #10b981', 
      borderRadius: '10px', 
      margin: '20px',
      backgroundColor: '#f0fdf4'
    }}>
      <h3>🔗 Frontend-Backend Connection Test</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Status:</strong> {connectionStatus}
      </div>

      {backendData && (
        <div style={{ marginBottom: '15px' }}>
          <strong>Backend Response:</strong>
          <pre style={{ 
            backgroundColor: '#e5e7eb', 
            padding: '10px', 
            borderRadius: '5px',
            fontSize: '12px',
            overflow: 'auto'
          }}>
            {JSON.stringify(backendData, null, 2)}
          </pre>
        </div>
      )}

      {error && (
        <div style={{ 
          color: '#dc2626', 
          backgroundColor: '#fef2f2', 
          padding: '10px', 
          borderRadius: '5px',
          marginBottom: '15px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <button 
        onClick={testConnection}
        style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        🔄 Test Connection Again
      </button>

      <div style={{ marginTop: '15px', fontSize: '14px', color: '#6b7280' }}>
        <strong>Backend URL:</strong> http://localhost:5001/api<br/>
        <strong>Frontend URL:</strong> http://localhost:3000
      </div>
    </div>
  );
};

export default ConnectionTest;



