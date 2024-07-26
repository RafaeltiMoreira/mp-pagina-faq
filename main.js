import apiData from './api.json';

document.addEventListener('DOMContentLoaded', () => {
  const faqList = document.getElementById('faqs');
  const themeToggle = document.getElementById('theme-toggle');

  function setInitialTheme() {
    const LightMode = document.body.classList.contains('light-mode');
    document.body.classList.toggle('dark-mode', !LightMode);
    document.querySelectorAll('.faq-container, .faq-container__question-card').forEach(e => {
      e.classList.toggle('light-mode', LightMode);
      e.classList.toggle('dark-mode', !LightMode);
    });
  }

  setInitialTheme();

  apiData.questions.forEach(item => {
    const questionCard = document.createElement('li');
    questionCard.classList.add('faq-container__question-card', 'light-mode');
    questionCard.innerHTML = `
      <h3 class="faq-container__question">
        <span>${item.question}</span>
        <img src="/images/arrow.svg" alt="Imagem de uma seta" class="faq-container__arrow" />
      </h3>
      <p class="faq-container__answer hidden">${item.answer}</p>
    `;
    faqList.appendChild(questionCard);

    questionCard.querySelector('.faq-container__question').addEventListener('click', () => {
      const answer = questionCard.querySelector('.faq-container__answer');
      const arrow = questionCard.querySelector('.faq-container__arrow');
      answer.classList.toggle('hidden');
      arrow.classList.toggle('active');
    });
  });

  themeToggle.addEventListener('click', () => {
    const LightMode = document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode', !LightMode);
    document.querySelectorAll('.faq-container, .faq-container__question-card').forEach(e => {
      e.classList.toggle('light-mode', LightMode);
      e.classList.toggle('dark-mode', !LightMode);
    });
  });
});