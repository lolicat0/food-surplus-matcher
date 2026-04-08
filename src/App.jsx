import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { DarkModeProvider } from './contexts/DarkModeContext'; // ✅ Import
import Router from './routes/Router';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <DarkModeProvider> {/* ✅ Wrap everything here */}
      <AuthProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              duration: 3000,
              theme: {
                primary: '#10B981',
                secondary: '#FDFDFD',
              },
            },
            error: {
              duration: 5000,
              theme: {
                primary: '#EF4444',
                secondary: '#FDFDFD',
              },
            },
          }}
        />
        <Router />
      </AuthProvider>
    </DarkModeProvider>
  );
}

export default App;