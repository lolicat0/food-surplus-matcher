import React, { useState, useEffect } from 'react';
import api from '../services/api';

const BackendTest = () => {
  const [status, setStatus] = useState('Testing...');
  const [details, setDetails] = useState('');

  useEffect(() => {
    testBackend();
  }, []);

  const testBackend = async () => {
    try {
      setStatus('Connecting...');
      const response = await api.get('/health');
      setStatus('✅ Connected!');
      setDetails(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setStatus('❌ Failed');
      setDetails(`Error: ${error.message}\nResponse: ${JSON.stringify(error.response?.data, null, 2)}`);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #10b981', 
      borderRadius: '10px', 
      margin: '20px',
      backgroundColor: '#f0fdf4',
      fontFamily: 'monospace'
    }}>
      <h3>🔗 Backend Connection Test</h3>
      <div><strong>Status:</strong> {status}</div>
      <div><strong>URL:</strong> http://localhost:5001/api</div>
      <pre style={{ 
        backgroundColor: '#e5e7eb', 
        padding: '10px', 
        borderRadius: '5px',
        fontSize: '12px',
        overflow: 'auto',
        marginTop: '10px'
      }}>
        {details}
      </pre>
      <button 
        onClick={testBackend}
        style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        🔄 Test Again
      </button>
    </div>
  );
};

export default BackendTest;



