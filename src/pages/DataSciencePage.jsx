import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { learningPaths, getModulesByTrackAndLevel } from '../data/learningPaths';
import {
  BarChart3,
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

const DataSciencePage = () => {
  const { progress, getModuleProgress } = useProgress();
  const trackData = learningPaths['data-science'];

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
    // First module is always unlocked
    if (moduleIndex === 0) return true;

    // Check if previous module in same level is completed
    const currentLevelModules = getModulesByTrackAndLevel('data-science', levelKey);
    const previousModule = currentLevelModules[moduleIndex - 1];

    if (previousModule) {
      return progress.completedTopics.includes(previousModule.id);
    }

    // If first module of intermediate/advanced level, check if previous level is mostly completed
    if (moduleIndex === 0 && levelKey !== 'beginner') {
      const levels = Object.keys(trackData.levels);
      const currentLevelIndex = levels.indexOf(levelKey);
      const previousLevelKey = levels[currentLevelIndex - 1];
      const previousLevelModules = getModulesByTrackAndLevel('data-science', previousLevelKey);
      const completedInPreviousLevel = previousLevelModules.filter(m =>
        progress.completedTopics.includes(m.id)
      ).length;

      // Require at least 80% completion of previous level
      return completedInPreviousLevel >= Math.ceil(previousLevelModules.length * 0.8);
    }

    return false;
  };

  const getLevelProgress = (levelKey) => {
    const modules = getModulesByTrackAndLevel('data-science', levelKey);
    const completed = modules.filter(m => progress.completedTopics.includes(m.id)).length;
    return {
      completed,
      total: modules.length,
      percentage: modules.length > 0 ? Math.round((completed / modules.length) * 100) : 0
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ds-primary-50 via-white to-ds-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ds-primary-500 to-ds-primary-600 rounded-2xl mb-6">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Data Science Learning Track
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the art of extracting insights from data. From statistics and programming
              to machine learning and AI - build the skills that drive data-driven decisions.
            </p>

            {/* Track Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-ds-primary-600 dark:text-ds-primary-400">
                  {progress.completedTopics.filter(id => id.startsWith('ds-')).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Modules Completed</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-ds-primary-600 dark:text-ds-primary-400">
                  {Object.keys(progress.quizScores).filter(id => id.startsWith('ds-')).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Quizzes Passed</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-ds-primary-600 dark:text-ds-primary-400">
                  {progress.certificates.filter(cert => cert.track === 'data-science').length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certificates Earned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Progress through three carefully designed levels, from beginner to expert
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(trackData.levels).map(([levelKey, levelData], levelIndex) => {
              const LevelIcon = levelIcons[levelKey];
              const levelProgress = getLevelProgress(levelKey);

              return (
                <div key={levelKey} className="relative">
                  {/* Level Header */}
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${levelColors[levelKey]} rounded-xl flex items-center justify-center mr-4`}>
                      <LevelIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {levelData.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {levelData.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <Trophy className="w-4 h-4" />
                          <span>{levelProgress.completed}/{levelProgress.total} completed</span>
                        </div>
                        <div className="flex-1 max-w-xs">
                          <div className="progress-bar">
                            <div
                              className="progress-fill bg-gradient-to-r from-ds-primary-500 to-ds-primary-600"
                              style={{ width: `${levelProgress.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-ds-primary-600 dark:text-ds-primary-400">
                          {levelProgress.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Modules Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {levelData.modules.map((module, moduleIndex) => {
                      const moduleProgress = getModuleProgress(module.id);
                      const isUnlocked = isModuleUnlocked(module.id, levelKey, moduleIndex);

                      return (
                        <div
                          key={module.id}
                          className={`card p-6 relative transition-all duration-200 ${
                            isUnlocked
                              ? 'card-hover cursor-pointer'
                              : 'opacity-60 cursor-not-allowed'
                          }`}
                        >
                          {/* Status Badge */}
                          <div className="absolute top-4 right-4">
                            {moduleProgress.isCompleted ? (
                              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              </div>
                            ) : !isUnlocked ? (
                              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                <Lock className="w-5 h-5 text-gray-400" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-ds-primary-100 dark:bg-ds-primary-900/20 rounded-full flex items-center justify-center">
                                <Play className="w-5 h-5 text-ds-primary-600" />
                              </div>
                            )}
                          </div>

                          <div className="pr-12">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {module.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                              {module.description}
                            </p>

                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{module.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <BookOpen className="w-4 h-4" />
                                <span>{module.topics.length} topics</span>
                              </div>
                            </div>

                            {/* Topics Preview */}
                            <div className="mb-4">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                What you'll learn:
                              </div>
                              <ul className="space-y-1">
                                {module.topics.slice(0, 3).map((topic, index) => (
                                  <li key={index} className="text-xs text-gray-600 dark:text-gray-300 flex items-center space-x-2">
                                    <div className="w-1 h-1 bg-ds-primary-500 rounded-full"></div>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                                {module.topics.length > 3 && (
                                  <li className="text-xs text-gray-500 dark:text-gray-400">
                                    +{module.topics.length - 3} more topics
                                  </li>
                                )}
                              </ul>
                            </div>

                            {/* Quiz Score */}
                            {moduleProgress.quizScore && (
                              <div className="mb-4 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-green-700 dark:text-green-400">Quiz Score</span>
                                  <span className="font-medium text-green-700 dark:text-green-400">
                                    {moduleProgress.quizScore.percentage}%
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Action Button */}
                            {isUnlocked ? (
                              <Link
                                to={`/learn/data-science/${module.id}`}
                                className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                              >
                                {moduleProgress.isCompleted ? (
                                  <>
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Review</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-4 h-4" />
                                    <span>Start Learning</span>
                                  </>
                                )}
                              </Link>
                            ) : (
                              <div className="btn-secondary w-full text-center opacity-50 cursor-not-allowed flex items-center justify-center space-x-2">
                                <Lock className="w-4 h-4" />
                                <span>Locked</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ds-primary-600 to-ds-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Data Science Journey?
          </h2>
          <p className="text-xl text-ds-primary-100 mb-8">
            Join thousands of learners who have transformed their careers with data science
          </p>
          <Link
            to="/module/data-science/ds-intro"
            className="bg-white text-ds-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Start First Module</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataSciencePage;
