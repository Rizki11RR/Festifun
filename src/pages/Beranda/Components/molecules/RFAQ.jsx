// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  const toggleAnswer = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleAnswer}>
        {question}
      </div>
      {isOpen && (
        <div className="faq-answer">
          {answer}
        </div>
      )}
    </div>
  );
};

function RFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Misalnya, kita punya beberapa FAQ
  const faqs = [
    { question: 'Pertanyaan 1?', answer: 'Jawaban untuk pertanyaan 1.' },
    { question: 'Pertanyaan 2?', answer: 'Jawaban untuk pertanyaan 2.' },
    { question: 'Pertanyaan 3?', answer: 'Jawaban untuk pertanyaan 3.' },
    { question: 'Pertanyaan 4?', answer: 'Jawaban untuk pertanyaan 4.' },
  ];

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
}

export default RFAQ;
