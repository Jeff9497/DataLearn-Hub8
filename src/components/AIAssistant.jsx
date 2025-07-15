import React, { useState, useRef, useEffect } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  BookOpen,
  Code,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: 'Hello! I\'m your AI learning assistant with expertise in both Data Science and Data Engineering. I can help you understand concepts, debug code, suggest learning paths, and answer questions about your current modules. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { progress } = useProgress();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Quick question templates
  const quickQuestions = [
    {
      icon: BookOpen,
      text: "Explain this concept",
      prompt: "Can you explain the concept I'm currently learning about in simple terms?"
    },
    {
      icon: Code,
      text: "Help with code",
      prompt: "I'm having trouble with some code. Can you help me debug it?"
    },
    {
      icon: HelpCircle,
      text: "Study guidance",
      prompt: "What should I focus on next in my learning journey?"
    },
    {
      icon: Lightbulb,
      text: "Real-world examples",
      prompt: "Can you give me real-world examples of how this is used in industry?"
    }
  ];

  const getCurrentContext = () => {
    const completedModules = progress.completedTopics.length;
    const currentTrack = progress.preferences.track || 'general';
    const recentQuizzes = Object.keys(progress.quizScores).slice(-3);

    return `Current learning context:
- Track: ${currentTrack}
- Completed modules: ${completedModules}
- Recent quiz topics: ${recentQuizzes.join(', ') || 'none'}
- Learning level: ${progress.preferences.difficulty || 'beginner'}`;
  };

  const [selectedModel, setSelectedModel] = useState(import.meta.env.VITE_DEFAULT_AI_MODEL || 'moonshotai/kimi-k2:free');

  const availableModels = [
    { id: 'moonshotai/kimi-k2:free', name: 'Moonshot Kimi K2', description: 'Great for explanations and learning' },
    { id: 'deepseek/deepseek-r1-0528-qwen3-8b:free', name: 'DeepSeek R1', description: 'Excellent for coding and technical questions' },
    { id: 'mistralai/devstral-small-2505:free', name: 'Mistral Devstral', description: 'Specialized for development tasks' }
  ];

  const callOpenRouterAPI = async (userMessage) => {
    const context = getCurrentContext();
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    if (!apiKey) {
      return "OpenRouter API key not configured. Please add your API key to the .env file.";
    }

    const systemPrompt = `You are a world-class expert in both Data Science and Data Engineering with 15+ years of industry experience. You've worked at top tech companies like Google, Netflix, and Uber, and have taught thousands of students.

Current learning context: ${context}

Your role is to:
- Explain complex concepts in simple, beginner-friendly terms with real-world examples
- Provide practical, industry-relevant examples and use cases
- Help debug code and suggest improvements with best practices
- Offer career guidance and learning paths based on current industry trends
- Stay current with the latest tools, technologies, and methodologies
- Adapt explanations to the user's current skill level and progress
- Encourage hands-on practice and project-based learning
- Share insights from real industry experience

Always be encouraging, patient, and provide actionable advice. When explaining concepts, use analogies, real-world examples, and step-by-step breakdowns to make them memorable and practical.

Focus on practical application and industry relevance. Share specific examples from companies like Netflix (recommendation systems), Uber (real-time data processing), or Airbnb (data-driven decision making).`;

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Data Science Learning Hub'
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 1500,
          temperature: 0.7,
          top_p: 0.9,
          frequency_penalty: 0.1,
          presence_penalty: 0.1
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content;
      } else {
        throw new Error('Invalid response format from API');
      }

    } catch (error) {
      console.error('OpenRouter API Error:', error);

      // Fallback to intelligent simulated response
      const fallbackResponses = [
        `I'd love to help with that! Based on your progress in ${progress.preferences.track || 'data science'}, here's what I can share about "${userMessage}":\n\nThis is a fundamental concept that builds on what you've already learned. Let me break it down step by step with practical examples from companies like Netflix and Uber.\n\n(Note: I'm currently in offline mode, but I can still provide helpful guidance based on your learning context!)`,

        `Great question about "${userMessage}"! Since you've completed ${progress.completedTopics.length} modules, you're ready for this concept.\n\nIn the industry, this is commonly used at companies like:\n- Google: For search ranking algorithms\n- Amazon: For recommendation systems\n- Tesla: For autonomous vehicle data processing\n\nLet me explain how this applies to your current learning path...\n\n(Currently in offline mode - full AI assistance will be available once connected!)`,

        `Excellent question! This relates directly to ${progress.preferences.track || 'data science'} and is something you'll use frequently in real projects.\n\nHere's how industry professionals approach "${userMessage}":\n\n1. Start with the business problem\n2. Understand the data requirements\n3. Choose the right tools and techniques\n4. Implement with best practices\n5. Monitor and iterate\n\nThis is exactly what data teams at Spotify, LinkedIn, and Airbnb do daily.\n\n(Note: Enhanced AI responses available when connected to OpenRouter API!)`
      ];

      return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
  };

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await callOpenRouterAPI(messageText);

      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (prompt) => {
    handleSendMessage(prompt);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-14 h-14 bg-gradient-to-r from-ds-primary-600 to-de-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50 group"
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[500px] bg-white dark:bg-dark-800 rounded-lg shadow-2xl border border-gray-200 dark:border-dark-700 flex flex-col z-50">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-dark-700 bg-gradient-to-r from-ds-primary-600 to-de-primary-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Learning Assistant</h3>
                  <p className="text-xs text-blue-100">Expert in Data Science & Engineering</p>
                </div>
              </div>
            </div>

            {/* Model Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-blue-100">Model:</span>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="text-xs bg-white/10 border border-white/20 rounded px-2 py-1 text-white focus:outline-none focus:ring-1 focus:ring-white/50"
              >
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id} className="text-gray-900">
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user'
                      ? 'bg-ds-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-ds-primary-600 text-white rounded-br-sm'
                        : 'bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-gray-100 rounded-bl-sm'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className={`text-xs mt-1 opacity-70 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="px-3 py-2 rounded-lg rounded-bl-sm bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-gray-100">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-200 dark:border-dark-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => {
                  const Icon = question.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question.prompt)}
                      className="flex items-center space-x-2 p-3 sm:p-2 text-xs bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg transition-colors duration-200 text-left min-h-[44px]"
                    >
                      <Icon className="w-4 h-4 sm:w-3 sm:h-3 text-ds-primary-600 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{question.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-dark-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about data science or engineering..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-ds-primary-500 focus:border-transparent disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputMessage.trim()}
                className="px-3 py-2 bg-ds-primary-600 text-white rounded-lg hover:bg-ds-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
