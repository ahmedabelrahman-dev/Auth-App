import React from 'react';
import { Toaster } from "react-hot-toast";
import FloatingShape from './components/FloatingShape.jsx';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import EmailVerificationPage from './pages/EmailVerificationPage.jsx';
import HomePage from './pages/HomePage.jsx';



function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      {/* Optional: Background floating shapes to match the aesthetic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#22c55e33,#0000)]" />
      </div>
      <FloatingShape
        className="absolute rounded-full bg-green-500 w-64 h-64 opacity-20 blur-xl top-10% left-10%"
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        className="absolute rounded-full bg-emerald-500 w-48 h-48 opacity-20 blur-xl top-70% left-80%"
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        className="absolute rounded-full bg-lime-500 w-32 h-32 opacity-20 blur-xl top-40% left-10%"
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
