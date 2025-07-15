import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { TrendingUp, Award, Clock, BarChart3 } from 'lucide-react';

const ProgressPage = () => {
  const { progress, getOverallProgress } = useProgress();
  
  const dsProgress = getOverallProgress('data-science');
  const deProgress = getOverallProgress('data-engineering');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Learning Progress
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Track your achievements and see how far you've come in your data journey.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-ds-primary-100 dark:bg-ds-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-ds-primary-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {progress.completedTopics.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Modules Completed
            </div>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {progress.certificates.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Certificates Earned
            </div>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {Math.round((dsProgress.totalTimeSpent + deProgress.totalTimeSpent) / 3600)}h
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Time Spent Learning
            </div>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {Math.round((dsProgress.averageQuizScore + deProgress.averageQuizScore) / 2) || 0}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Quiz Score
            </div>
          </div>
        </div>

        {/* Track Progress */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Science Progress
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Modules Completed</span>
                <span className="font-medium">{dsProgress.completedModules}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Average Quiz Score</span>
                <span className="font-medium">{Math.round(dsProgress.averageQuizScore)}%</span>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Engineering Progress
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Modules Completed</span>
                <span className="font-medium">{deProgress.completedModules}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Average Quiz Score</span>
                <span className="font-medium">{Math.round(deProgress.averageQuizScore)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
