import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { learningPaths, getModulesByTrackAndLevel } from '../data/learningPaths';
import {
  Database,
  Clock,
  BookOpen,
  CheckCircle,
  Lock,
  Play,
  Trophy,
  Star,
  ArrowRight,
  Target,
  Zap,
  Brain
} from 'lucide-react';

const DataEngineeringPage = () => {
  const { progress, getModuleProgress } = useProgress();
  const trackData = learningPaths['data-engineering'];

  const levelIcons = {
    beginner: Target,
    intermediate: Zap,
    advanced: Brain
  };

  const levelColors = {
    beginner: 'from-green-500 to-green-600',
    intermediate: 'from-yellow-500 to-orange-500',
    advanced: 'from-red-500 to-purple-600'
  };

  const isModuleUnlocked = (moduleId, levelKey, moduleIndex) => {
    if (moduleIndex === 0) return true;
    const currentLevelModules = getModulesByTrackAndLevel('data-engineering', levelKey);
    const previousModule = currentLevelModules[moduleIndex - 1];
    if (previousModule) {
      return progress.completedTopics.includes(previousModule.id);
    }
    if (moduleIndex === 0 && levelKey !== 'beginner') {
      const levels = Object.keys(trackData.levels);
      const currentLevelIndex = levels.indexOf(levelKey);
      const previousLevelKey = levels[currentLevelIndex - 1];
      if (previousLevelKey) {
        const previousLevelModules = getModulesByTrackAndLevel('data-engineering', previousLevelKey);
        const completedInPreviousLevel = previousLevelModules.filter(module => 
          progress.completedTopics.includes(module.id)
        ).length;
        return completedInPreviousLevel >= Math.ceil(previousLevelModules.length * 0.7);
      }
    }
    return false;
  };

  const getModuleStatus = (moduleId) => {
    if (progress.completedTopics.includes(moduleId)) {
      return 'completed';
    }
    if (progress.currentTopic === moduleId) {
      return 'current';
    }
    return 'locked';
  };

  const ModuleCard = ({ module, levelKey, moduleIndex, isUnlocked }) => {
    const moduleProgress = getModuleProgress(module.id);
    const status = getModuleStatus(module.id);
    
    return (
      <div className={`card p-4 sm:p-6 transition-all duration-200 ${
        isUnlocked ? 'hover:shadow-lg cursor-pointer' : 'opacity-60'
      } ${status === 'current' ? 'ring-2 ring-de-primary-500' : ''}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {status === 'completed' ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : status === 'current' ? (
              <Play className="w-6 h-6 text-de-primary-500" />
            ) : isUnlocked ? (
              <BookOpen className="w-6 h-6 text-gray-400" />
            ) : (
              <Lock className="w-6 h-6 text-gray-300" />
            )}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {module.title}
              </h3>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{module.duration}</span>
                <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs ${
                  module.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {module.difficulty}
                </span>
              </div>
            </div>
          </div>
          {moduleProgress > 0 && (
            <div className="text-right">
              <div className="text-sm font-medium text-de-primary-600 dark:text-de-primary-400">
                {Math.round(moduleProgress)}%
              </div>
              <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                <div 
                  className="bg-de-primary-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${moduleProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {module.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Topics covered:</h4>
          <div className="flex flex-wrap gap-1">
            {module.topics.slice(0, 3).map((topic, index) => (
              <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                {topic}
              </span>
            ))}
            {module.topics.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{module.topics.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        {isUnlocked ? (
          <Link
            to={`/learn/data-engineering/${module.id}`}
            className="btn-primary w-full flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base py-2 sm:py-3"
          >
            {status === 'completed' ? (
              <>
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Review</span>
              </>
            ) : status === 'current' ? (
              <>
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Continue</span>
              </>
            ) : (
              <>
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Start Learning</span>
                <span className="xs:hidden">Start</span>
              </>
            )}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        ) : (
          <button
            disabled
            className="btn-outline w-full opacity-50 cursor-not-allowed flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base py-2 sm:py-3"
          >
            <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Locked</span>
          </button>
        )}
      </div>
    );
  };

  if (!trackData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Track Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The data engineering track could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="bg-gradient-to-r from-de-primary-600 to-de-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Database className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">{trackData.title}</h1>
            <p className="text-xl text-de-primary-100 max-w-3xl mx-auto">
              {trackData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {Object.entries(trackData.levels).map(([levelKey, levelData]) => {
            const LevelIcon = levelIcons[levelKey];
            const modules = getModulesByTrackAndLevel('data-engineering', levelKey);
            
            return (
              <div key={levelKey} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${levelColors[levelKey]} text-white`}>
                    <LevelIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {levelData.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {levelData.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {modules.map((module, moduleIndex) => {
                    const isUnlocked = isModuleUnlocked(module.id, levelKey, moduleIndex);
                    
                    return (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        levelKey={levelKey}
                        moduleIndex={moduleIndex}
                        isUnlocked={isUnlocked}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringPage;
