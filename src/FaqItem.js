import { useState } from 'react';
import PropTypes from 'prop-types';
import './Faq.css';

const FaqItem = ({ question, answer, className, itemClassName, questionClassName, answerClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${itemClassName} ${className || ''}`}>
      <button 
        className={`faq-question ${questionClassName}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className={`faq-answer ${answerClassName}`} aria-hidden={!isOpen}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
