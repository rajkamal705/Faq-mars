import React from 'react';
import PropTypes from 'prop-types';
import FaqItem from './FaqItem';
import './Faq.css'

const Faq = ({ items, className, itemClassName, questionClassName, answerClassName }) => {
  return (
    <div className={`faq-container ${className}`}>
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          className={className}
          itemClassName={itemClassName}
          questionClassName={questionClassName}
          answerClassName={answerClassName}
        />
      ))}
    </div>
  );
};

Faq.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
    })
  ).isRequired,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  questionClassName: PropTypes.string,
  answerClassName: PropTypes.string
};

export default Faq;