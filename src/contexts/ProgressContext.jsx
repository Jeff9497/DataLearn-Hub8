import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

const initialProgress = {
  currentModule: null,
  completedTopics: [],
  quizScores: {},
  certificates: [],
  bookmarks: [],
  timeSpent: {},
  lastAccessed: null,
  preferences: {
    track: null, // 'data-science' or 'data-engineering'
    difficulty: 'beginner',
    notifications: true
  }
};

export const ProgressProvider = ({ children }) => {
  const { user, getUserStorageKey } = useAuth();
  const [progress, setProgress] = useState(initialProgress);

  // Load progress when user changes
  useEffect(() => {
    if (user) {
      const progressKey = getUserStorageKey('progress');
      const saved = localStorage.getItem(progressKey);
      if (saved) {
        try {
          setProgress({ ...initialProgress, ...JSON.parse(saved) });
        } catch (error) {
          console.error('Error loading progress:', error);
          setProgress(initialProgress);
        }
      } else {
        setProgress(initialProgress);
      }
    } else {
      setProgress(initialProgress);
    }
  }, [user, getUserStorageKey]);

  // Save to localStorage whenever progress changes (only if user is logged in)
  useEffect(() => {
    if (user) {
      const progressKey = getUserStorageKey('progress');
      localStorage.setItem(progressKey, JSON.stringify(progress));
    }
  }, [progress, user, getUserStorageKey]);

  const updateProgress = (updates) => {
    setProgress(prev => ({
      ...prev,
      ...updates,
      lastAccessed: new Date().toISOString()
    }));
  };

  const completeModule = (moduleId) => {
    setProgress(prev => ({
      ...prev,
      completedTopics: [...new Set([...prev.completedTopics, moduleId])],
      lastAccessed: new Date().toISOString()
    }));
  };

  const saveQuizScore = (moduleId, score, totalQuestions) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [moduleId]: {
          score,
          totalQuestions,
          percentage: Math.round((score / totalQuestions) * 100),
          completedAt: new Date().toISOString()
        }
      },
      lastAccessed: new Date().toISOString()
    }));
  };

  const addCertificate = (certificateId, track, level) => {
    const certificate = {
      id: certificateId,
      track,
      level,
      earnedAt: new Date().toISOString(),
      title: `${track} - ${level} Level Completion`
    };

    setProgress(prev => ({
      ...prev,
      certificates: [...prev.certificates, certificate],
      lastAccessed: new Date().toISOString()
    }));
  };

  const toggleBookmark = (moduleId) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(moduleId)
        ? prev.bookmarks.filter(id => id !== moduleId)
        : [...prev.bookmarks, moduleId],
      lastAccessed: new Date().toISOString()
    }));
  };

  const updateTimeSpent = (moduleId, timeInSeconds) => {
    setProgress(prev => ({
      ...prev,
      timeSpent: {
        ...prev.timeSpent,
        [moduleId]: (prev.timeSpent[moduleId] || 0) + timeInSeconds
      },
      lastAccessed: new Date().toISOString()
    }));
  };

  const updatePreferences = (newPreferences) => {
    setProgress(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...newPreferences
      },
      lastAccessed: new Date().toISOString()
    }));
  };

  const resetProgress = () => {
    setProgress(initialProgress);
    localStorage.removeItem('learningProgress');
  };

  const getModuleProgress = (moduleId) => {
    return {
      isCompleted: progress.completedTopics.includes(moduleId),
      isBookmarked: progress.bookmarks.includes(moduleId),
      quizScore: progress.quizScores[moduleId],
      timeSpent: progress.timeSpent[moduleId] || 0
    };
  };

  const getOverallProgress = (track) => {
    // Map track names to module prefixes
    const trackPrefix = track === 'data-science' ? 'ds-' : track === 'data-engineering' ? 'de-' : track;
    const trackModules = progress.completedTopics.filter(id => id.startsWith(trackPrefix));

    // Calculate track-specific metrics
    const trackQuizScores = Object.entries(progress.quizScores)
      .filter(([moduleId]) => moduleId.startsWith(trackPrefix))
      .map(([, scoreData]) => scoreData.percentage);

    const trackTimeSpent = Object.entries(progress.timeSpent)
      .filter(([moduleId]) => moduleId.startsWith(trackPrefix))
      .reduce((total, [, time]) => total + time, 0);

    const averageQuizScore = trackQuizScores.length > 0
      ? Math.round(trackQuizScores.reduce((sum, score) => sum + score, 0) / trackQuizScores.length)
      : 0;

    return {
      completedModules: trackModules.length,
      totalTimeSpent: trackTimeSpent,
      averageQuizScore,
      certificates: progress.certificates.filter(cert => cert.track === track).length
    };
  };

  const value = {
    progress,
    updateProgress,
    completeModule,
    saveQuizScore,
    addCertificate,
    toggleBookmark,
    updateTimeSpent,
    updatePreferences,
    resetProgress,
    getModuleProgress,
    getOverallProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
