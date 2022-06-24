import { QuestionArea, Question, Options, Option } from './styles';
import { getQuiz } from '../../utils/getQuiz';
import { useState } from 'react';
import ResultQuiz from './ResultQuiz';

export default function Quiz({ topic }: { topic: string }) {
  const quiz = getQuiz(topic);
  let count = 1;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const quizLength = quiz.questions.length;

  function optionClick(e: any) {
    const el = e.currentTarget;
    const key = Number(el.getAttribute('data-answer'));
    const pct = Math.floor(((currentQuestion + 1) / quizLength) * 100);
    const progressBar = document.querySelector<HTMLElement>('.bar');
    if (key === quiz.questions[currentQuestion].answer) {
      el.style.backgroundColor = 'green';
      setCorrectAnswers(correctAnswers + 1);
    } else el.style.backgroundColor = 'red';
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      el.style.backgroundColor = '';
      if (progressBar) progressBar.style.width = `${pct}%`;
    }, 300);
  }
  if (quiz.questions[currentQuestion] != undefined) {
    return (
      <QuestionArea>
        <Question>{quiz.questions[currentQuestion].question}</Question>
        <Options>
          {quiz.questions[currentQuestion].options.map(option => (
            <Option key={count} onClick={optionClick} data-answer={count}>
              <span>{count++}</span>
              {option}
            </Option>
          ))}
        </Options>
      </QuestionArea>
    );
  } else {
    return <ResultQuiz correct={correctAnswers} quiz={quizLength} />;
  }
}
