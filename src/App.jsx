import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { ProgressProvider } from './contexts/ProgressContext.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import DataSciencePage from './pages/DataSciencePage';
import DataEngineeringPage from './pages/DataEngineeringPage';
import LearningModule from './pages/LearningModule';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';
import AIAssistant from './components/AIAssistant';

const AppContent = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ds-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading DataLearn Hub8...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated()) {
    return <Login />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data-science" element={<DataSciencePage />} />
          <Route path="/data-engineering" element={<DataEngineeringPage />} />
          <Route path="/learn/:track/:moduleId" element={<LearningModule />} />
          <Route path="/quiz/:track/:moduleId" element={<QuizPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <Router>
            <AppContent />
          </Router>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
