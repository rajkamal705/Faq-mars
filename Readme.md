# React FAQ Component 🌌

A customizable, accessible FAQ/accordion component for React applications with built-in styling.

![FAQ Component Preview](https://via.placeholder.com/800x400.png?text=FAQ+Component+Preview+with+Styles)

## Features ✨

- 🎨 **Auto-included CSS** with zero-config styling
- ♿ Built with accessibility (ARIA) support
- 🌀 Smooth fade-in animations and toggle transitions
- 📦 **No CSS imports needed** - styles bundled automatically
- 🌐 PropTypes validation with error warnings
- 🧩 Dual module support (CJS + ESM)
- 🛠️ CSS Variables for easy theme customization

## Installation 📦

```bash
npm install faq-mars

## Peer Dependencies ⚙️
## Ensure these are installed in your host project:

bash
npm install react react-dom prop-types

##### basic usage:
import React from 'react';
import Faq from 'faq-mars';
import 'faq-mars/dist/Faq.css';

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


## Customization
1. Using CSS Classes
javascript

<Faq
  items={items}
  className="custom-container"
  itemClassName="custom-item"
  questionClassName="custom-question"
  answerClassName="custom-answer"
/>


# 2. CSS Variables theming
/* In your global CSS */
.faq-container {
  --faq-border-color: #e0e0e0;
  --faq-bg-color: #f8f8f8;
  --faq-hover-bg: #f0f0f0;
  --faq-text-color: #333;
  --faq-transition-speed: 0.3s;
  --faq-border-radius: 8px;
}

# 3. Custom CSS
/* Custom question style */
.custom-question {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-family: 'Comic Sans MS', cursive;
}

/* Custom answer animation */
.custom-answer {
  background: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

License 📄
MIT © raj kamal



