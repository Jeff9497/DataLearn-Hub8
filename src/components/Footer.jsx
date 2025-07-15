import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-ds-primary-500 to-de-primary-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              DataLearn Hub8
            </span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Your comprehensive platform for learning data science and data engineering.
          </p>

          {/* GitHub Link */}
          <div className="flex justify-center mb-6">
            <a
              href="https://github.com/Jeff9497"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-dark-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-ds-primary-600 hover:bg-ds-primary-100 dark:hover:bg-ds-primary-900/20 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Jeff9497</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for data enthusiasts</span>
            </div>
            <span>•</span>
            <span>© {currentYear} DataLearn Hub8. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
