# React FAQ Component

A customizable, accessible FAQ/accordion component for React applications.

![FAQ Component Preview](https://via.placeholder.com/800x400.png?text=FAQ+Component+Preview)

## Features

- 🎨 Customizable through CSS classes and CSS variables
- ♿ Built with accessibility (ARIA) support
- 🌀 Smooth animations and transitions
- 📦 Zero external dependencies (except React)
- 🌐 PropTypes validation
- 🧩 Supports both CommonJS and ES Modules

## Installation

```bash
npm install faq-mars

##### usage:
import React from 'react';
import Faq from 'faq-mars';

const App = () => {
  const faqItems = [
    {
      question: "How does it work?",
      answer: "This component provides an interactive FAQ interface."
    },
    {
      question: "Can I customize it?",
      answer: <div>Yes! Use <code>className</code> props or CSS variables.</div>
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Project FAQ</h1>
      <Faq items={faqItems} />
    </div>
  );
};


## Peer Dependencies
## Make sure you have these installed in your project:

bash:
npm install react react-dom prop-types

![Example Image](/props.png)


## Customization
1. Using CSS Classes
javascript

<Faq
  items={items}
  className="faq-container"
  itemClassName="faq-item"
  questionClassName="faq-question"
  answerClassName="faq-answer"
/>


# 2. Using CSS Variables
css
.faq-container {
  --faq-border-color: #e0e0e0;
  --faq-bg-color: #f8f8f8;
  --faq-hover-bg: #f0f0f0;
  --faq-text-color: #333;
  --faq-transition-speed: 0.3s;
}

# 3. Custom CSS
css
/* Custom question style */
.custom-question {
  background-color: #007bff;
  color: white;
  border-radius: 8px;
}

/* Custom answer animation */
.custom-answer {
  transition: height 0.3s ease-out;
}



