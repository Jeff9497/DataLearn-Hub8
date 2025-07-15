import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { getModule } from '../data/learningPaths';
import { getQuizData, calculateScore, shuffleArray } from '../data/quizData';
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  X,
  AlertCircle,
  Trophy,
  RotateCcw,
  ArrowRight,
  Target,
  BookOpen
} from 'lucide-react';

const QuizPage = () => {
  const { track, moduleId } = useParams();
  const navigate = useNavigate();
  const { saveQuizScore, getModuleProgress } = useProgress();

  const [quizState, setQuizState] = useState('start'); // start, taking, completed
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const module = getModule(track, moduleId);
  const quizData = getQuizData(moduleId);
  const moduleProgress = getModuleProgress(moduleId);

  // Shuffle questions when quiz starts
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    if (quizData && quizState === 'taking') {
      setTimeLeft(quizData.timeLimit * 60); // Convert minutes to seconds
    }
  }, [quizData, quizState]);

  // Timer countdown
  useEffect(() => {
    if (quizState === 'taking' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizState === 'taking') {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizState]);

  const startQuiz = () => {
    if (quizData) {
      const shuffled = shuffleArray(quizData.questions);
      setShuffledQuestions(shuffled);
      setSelectedAnswers(new Array(shuffled.length).fill(null));
      setCurrentQuestion(0);
      setQuizState('taking');
      setShowExplanation(false);
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmitQuiz = () => {
    const calculatedScore = calculateScore(selectedAnswers, shuffledQuestions);
    setScore(calculatedScore);
    setQuizState('completed');

    // Save score to progress
    saveQuizScore(moduleId, calculatedScore.correct, calculatedScore.total);
  };

  const retakeQuiz = () => {
    setQuizState('start');
    setScore(null);
    setSelectedAnswers([]);
    setCurrentQuestion(0);
    setShowExplanation(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!module || !quizData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz Not Available
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The quiz for this module is not yet available.
          </p>
          <Link
            to={`/module/${track}/${moduleId}`}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Module</span>
          </Link>
        </div>
      </div>
    );
  }

  const trackColor = track === 'data-science' ? 'ds-primary' : 'de-primary';
  const currentQuestionData = shuffledQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className={`bg-gradient-to-r from-${trackColor}-600 to-${trackColor}-700 text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to={`/module/${track}/${moduleId}`}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold">{quizData.title}</h1>
                <p className="text-blue-100">{module.title}</p>
              </div>
            </div>

            {quizState === 'taking' && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono">{formatTime(timeLeft)}</span>
                </div>
                <div className="text-sm">
                  {currentQuestion + 1} / {shuffledQuestions.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quiz Start Screen */}
        {quizState === 'start' && (
          <div className="card p-8 text-center">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {quizData.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {quizData.questions.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {quizData.timeLimit} min
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Time Limit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {quizData.passingScore}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Passing Score</div>
              </div>
            </div>

            {moduleProgress.quizScore && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-400">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">Previous Score: {moduleProgress.quizScore.percentage}%</span>
                </div>
              </div>
            )}

            <button
              onClick={startQuiz}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
            >
              <Target className="w-5 h-5" />
              <span>Start Quiz</span>
            </button>
          </div>
        )}

        {/* Quiz Taking Screen */}
        {quizState === 'taking' && currentQuestionData && (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Progress
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentQuestion + 1} of {shuffledQuestions.length}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className={`progress-fill bg-gradient-to-r from-${trackColor}-500 to-${trackColor}-600`}
                  style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="card p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full bg-${trackColor}-100 dark:bg-${trackColor}-900/20 text-${trackColor}-700 dark:text-${trackColor}-400`}>
                    Question {currentQuestion + 1}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    currentQuestionData.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                    currentQuestionData.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                    'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {currentQuestionData.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {currentQuestionData.question}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === index
                        ? `border-${trackColor}-500 bg-${trackColor}-50 dark:bg-${trackColor}-900/20`
                        : 'border-gray-200 dark:border-dark-600 hover:border-gray-300 dark:hover:border-dark-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? `border-${trackColor}-500 bg-${trackColor}-500`
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-gray-900 dark:text-white">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Show Explanation Button */}
              {selectedAnswers[currentQuestion] !== null && (
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="btn-secondary mb-4"
                >
                  {showExplanation ? 'Hide' : 'Show'} Explanation
                </button>
              )}

              {/* Explanation */}
              {showExplanation && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                        Correct Answer: {currentQuestionData.options[currentQuestionData.correct]}
                      </div>
                      <div className="text-blue-700 dark:text-blue-300 text-sm">
                        {currentQuestionData.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentQuestion === shuffledQuestions.length - 1 ? (
                  <button
                    onClick={handleSubmitQuiz}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Submit Quiz</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Completed Screen */}
        {quizState === 'completed' && score && (
          <div className="card p-8 text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
              score.percentage >= quizData.passingScore
                ? 'bg-green-100 dark:bg-green-900/20'
                : 'bg-red-100 dark:bg-red-900/20'
            }`}>
              {score.percentage >= quizData.passingScore ? (
                <Trophy className="w-10 h-10 text-green-600 dark:text-green-400" />
              ) : (
                <X className="w-10 h-10 text-red-600 dark:text-red-400" />
              )}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {score.percentage >= quizData.passingScore ? 'Congratulations!' : 'Keep Learning!'}
            </h2>

            <div className="text-6xl font-bold mb-4">
              <span className={score.percentage >= quizData.passingScore ? 'text-green-600' : 'text-red-600'}>
                {score.percentage}%
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              You scored {score.correct} out of {score.total} questions correctly.
              {score.percentage >= quizData.passingScore
                ? ' Great job! You can move on to the next module.'
                : ` You need ${quizData.passingScore}% to pass. Review the material and try again.`
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={retakeQuiz}
                className="btn-secondary flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              <Link
                to={`/module/${track}/${moduleId}`}
                className="btn-primary flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Back to Module</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
