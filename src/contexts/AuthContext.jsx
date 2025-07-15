import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Dummy user credentials
const VALID_USERS = {
  'Hub8': {
    username: 'Hub8',
    password: 'DataLearnHub8',
    displayName: 'Hub8 Learner'
  },
  'Hub28': {
    username: 'Hub28',
    password: 'DataLearnHub28',
    displayName: 'Hub28 Learner'
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('datalearn_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('datalearn_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    const user = VALID_USERS[username];
    
    if (user && user.password === password) {
      const userData = {
        username: user.username,
        displayName: user.displayName,
        loginTime: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('datalearn_user', JSON.stringify(userData));
      return { success: true };
    }
    
    return { 
      success: false, 
      error: 'Invalid username or password' 
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('datalearn_user');
    // Clear user-specific progress data
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('datalearn_progress_') || key.startsWith('datalearn_current_')) {
        localStorage.removeItem(key);
      }
    });
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const getUserStorageKey = (key) => {
    if (!user) return null;
    return `datalearn_${key}_${user.username}`;
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated,
    getUserStorageKey
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
