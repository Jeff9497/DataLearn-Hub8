import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { getModule } from '../data/learningPaths';
import { getModuleContent } from '../data/moduleContent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  CheckCircle,
  Play,
  Code,
  FileText,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Trophy,
  Target
} from 'lucide-react';

const LearningModule = () => {
  const { track, moduleId } = useParams();
  const navigate = useNavigate();
  const { progress, completeModule, toggleBookmark, updateTimeSpent, getModuleProgress } = useProgress();

  const [currentSection, setCurrentSection] = useState(0);
  const [startTime] = useState(Date.now());
  const [showCode, setShowCode] = useState({});

  const module = getModule(track, moduleId);
  const content = getModuleContent(moduleId);
  const moduleProgress = getModuleProgress(moduleId);

  useEffect(() => {
    // Track time spent when component unmounts
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      updateTimeSpent(moduleId, timeSpent);
    };
  }, [moduleId, startTime, updateTimeSpent]);

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Module Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The requested module could not be found.
          </p>
          <button
            onClick={handleBackNavigation}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Track</span>
          </button>
        </div>
      </div>
    );
  }

  const handleCompleteModule = () => {
    completeModule(moduleId);
  };

  const handleBookmarkToggle = () => {
    toggleBookmark(moduleId);
  };

  const handleBackNavigation = () => {
    // Navigate back to the appropriate track page
    navigate(`/${track}`, { replace: true });
  };

  const toggleCodeExample = (sectionIndex) => {
    setShowCode(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }));
  };

  const trackColor = track === 'data-science' ? 'ds-primary' : 'de-primary';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className={`bg-gradient-to-r from-${trackColor}-600 to-${trackColor}-700 text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleBackNavigation}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleBookmarkToggle}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                {moduleProgress.isBookmarked ? (
                  <BookmarkCheck className="w-5 h-5" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="mb-4">
              <h1 className="text-xl sm:text-2xl font-bold mb-2">{module.title}</h1>
              <p className="text-blue-100 text-sm">{module.description}</p>
            </div>

            <div className="w-full">
              {moduleProgress.isCompleted ? (
                <div className="flex items-center justify-center space-x-2 bg-green-500 px-4 py-3 rounded-lg w-full">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Completed</span>
                </div>
              ) : (
                <button
                  onClick={handleCompleteModule}
                  className="bg-white text-gray-900 px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
                >
                  <Target className="w-4 h-4" />
                  <span>Mark Complete</span>
                </button>
              )}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackNavigation}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-3xl font-bold">{module.title}</h1>
                <p className="text-blue-100 mt-1">{module.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleBookmarkToggle}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                {moduleProgress.isBookmarked ? (
                  <BookmarkCheck className="w-5 h-5" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </button>

              {moduleProgress.isCompleted ? (
                <div className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Completed</span>
                </div>
              ) : (
                <button
                  onClick={handleCompleteModule}
                  className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Target className="w-4 h-4" />
                  <span>Mark Complete</span>
                </button>
              )}
            </div>
          </div>

          {/* Module Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-blue-100 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>{module.topics.length} topics</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span className="capitalize">{module.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="card p-4 sm:p-6 lg:sticky lg:top-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Module Contents
              </h3>

              {/* Topics Overview */}
              <div className="space-y-2 mb-6">
                {module.topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              {/* Section Navigation */}
              {content && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-3">
                    Sections
                  </h4>
                  {content.sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => setCurrentSection(index)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition-colors duration-200 ${
                        currentSection === index
                          ? `bg-${trackColor}-100 dark:bg-${trackColor}-900/20 text-${trackColor}-700 dark:text-${trackColor}-400`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Quiz Link */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
                <Link
                  to={`/quiz/${track}/${moduleId}`}
                  className={`btn-outline w-full text-center border-${trackColor}-600 text-${trackColor}-600 hover:bg-${trackColor}-600`}
                >
                  Take Quiz
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {content ? (
              <div className="card p-4 sm:p-6 lg:p-8">
                {/* Section Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      // Custom styling for different elements
                      h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">{children}</h3>,
                      p: ({children}) => <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{children}</p>,
                      strong: ({children}) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>,
                      ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">{children}</ul>,
                      ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">{children}</ol>,
                      li: ({children}) => <li className="ml-4">{children}</li>,
                      code: ({inline, children}) =>
                        inline
                          ? <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-900 dark:text-gray-100">{children}</code>
                          : <code className="block bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">{children}</code>,
                      blockquote: ({children}) => <blockquote className="border-l-4 border-ds-primary-500 pl-4 italic text-gray-600 dark:text-gray-400 mb-4">{children}</blockquote>
                    }}
                  >
                    {content.sections[currentSection].content}
                  </ReactMarkdown>
                </div>

                {/* Code Example */}
                {content.sections[currentSection].codeExample && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                        <Code className="w-5 h-5" />
                        <span>Code Example</span>
                      </h3>
                      <button
                        onClick={() => toggleCodeExample(currentSection)}
                        className="btn-secondary text-sm"
                      >
                        {showCode[currentSection] ? 'Hide Code' : 'Show Code'}
                      </button>
                    </div>

                    {showCode[currentSection] && (
                      <div className="bg-gray-900 dark:bg-dark-900 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{content.sections[currentSection].codeExample.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
                  <button
                    onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                    disabled={currentSection === 0}
                    className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {currentSection + 1} of {content.sections.length}
                  </span>

                  <button
                    onClick={() => setCurrentSection(Math.min(content.sections.length - 1, currentSection + 1))}
                    disabled={currentSection === content.sections.length - 1}
                    className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="card p-8 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Content Coming Soon
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Detailed content for this module is being prepared and will be available soon.
                </p>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    What you'll learn:
                  </h3>
                  <ul className="space-y-2 text-left max-w-md mx-auto">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Resources */}
            {content && content.resources && (
              <div className="card p-6 mt-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>Additional Resources</span>
                </h3>
                <div className="space-y-3">
                  {content.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {resource.title}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full bg-${trackColor}-100 dark:bg-${trackColor}-900/20 text-${trackColor}-700 dark:text-${trackColor}-400`}>
                          {resource.type}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModule;
