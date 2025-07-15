import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import {
  BarChart3,
  Database,
  BookOpen,
  ArrowRight,
  Trophy,
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Settings
} from 'lucide-react';

const HomePage = () => {
  const { progress, getOverallProgress } = useProgress();

  const dsProgress = getOverallProgress('data-science');
  const deProgress = getOverallProgress('data-engineering');

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'From beginner fundamentals to advanced techniques, covering everything you need to know.'
    },
    {
      icon: Trophy,
      title: 'Interactive Assessments',
      description: 'Test your knowledge with quizzes and earn certificates as you progress.'
    },
    {
      icon: Clock,
      title: 'Self-Paced Learning',
      description: 'Learn at your own speed with progress tracking and personalized recommendations.'
    },
    {
      icon: Users,
      title: 'AI Expert Assistant',
      description: 'Get instant help from our AI tutor, available 24/7 to answer your questions.'
    }
  ];

  const stats = [
    { label: 'Learning Modules', value: '25+' },
    { label: 'Practice Exercises', value: '100+' },
    { label: 'Real Projects', value: '15+' },
    { label: 'Career Paths', value: '10+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ds-primary-50 via-white to-de-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ds-primary-600 to-de-primary-600 mb-2">
                DataLearn Hub8
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Master{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ds-primary-600 to-de-primary-600">
                  Data Science
                </span>{' '}
                &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-de-primary-600 to-ds-primary-600">
                  Data Engineering
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your career with comprehensive, hands-on learning paths designed to take you from complete beginner to industry expert.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/data-science"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Start Data Science</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/data-engineering"
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <Settings className="w-5 h-5" />
                <span>Start Data Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-ds-primary-600 dark:text-ds-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Two comprehensive tracks designed to build expertise in high-demand fields
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Data Science Track */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-ds-primary-100 to-ds-primary-200 dark:from-ds-primary-900/20 dark:to-ds-primary-800/20 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-ds-primary-500 to-ds-primary-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Data Science Track
                    </h3>
                    <p className="text-ds-primary-600 dark:text-ds-primary-400 font-medium">
                      Analytics • ML • AI
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Master the art of extracting insights from data. Learn statistics, machine learning,
                  deep learning, and how to build predictive models that drive business decisions.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-ds-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">Python & R Programming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-ds-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-ds-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">Data Visualization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-ds-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">Statistical Analysis</span>
                  </div>
                </div>

                {dsProgress.completedModules > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Your Progress</span>
                      <span>{dsProgress.completedModules} modules completed</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill bg-gradient-to-r from-ds-primary-500 to-ds-primary-600"
                        style={{ width: `${Math.min((dsProgress.completedModules / 15) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <Link
                  to="/data-science"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>{dsProgress.completedModules > 0 ? 'Continue Learning' : 'Start Learning'}</span>
                </Link>
              </div>
            </div>

            {/* Data Engineering Track */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-de-primary-100 to-de-primary-200 dark:from-de-primary-900/20 dark:to-de-primary-800/20 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-de-primary-500 to-de-primary-600 rounded-xl flex items-center justify-center">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Data Engineering Track
                    </h3>
                    <p className="text-de-primary-600 dark:text-de-primary-400 font-medium">
                      Pipelines • Infrastructure • Scale
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Build the backbone of data-driven organizations. Learn to design, build, and maintain
                  robust data pipelines and infrastructure that power analytics and ML systems.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-de-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">SQL & Database Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-de-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">ETL/ELT Pipelines</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-de-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">Cloud Platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-de-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">Big Data Technologies</span>
                  </div>
                </div>

                {deProgress.completedModules > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Your Progress</span>
                      <span>{deProgress.completedModules} modules completed</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill bg-gradient-to-r from-de-primary-500 to-de-primary-600"
                        style={{ width: `${Math.min((deProgress.completedModules / 15) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <Link
                  to="/data-engineering"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>{deProgress.completedModules > 0 ? 'Continue Learning' : 'Start Learning'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Designed by industry experts to provide the most effective learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-ds-primary-100 to-de-primary-100 dark:from-ds-primary-900/20 dark:to-de-primary-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-ds-primary-600 dark:text-ds-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ds-primary-600 to-de-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-ds-primary-100 mb-8">
            Join thousands of learners who have successfully transitioned into data careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/data-science"
              className="bg-white text-ds-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Start Data Science Journey</span>
            </Link>
            <Link
              to="/data-engineering"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ds-primary-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Settings className="w-5 h-5" />
              <span>Start Data Engineering Journey</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
