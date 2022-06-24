import { useState } from 'react';
import Globals from '../../styles/globals';
import { QuizOption } from '../../components/QuizOption';
import { Container, Quizzes, Progress, Footer } from './styles';
import quiz from '../../api/quiz';
import Quiz from '../../components/Quiz';

export default function App() {
  const [quizVisible, setQuizVisible] = useState(false);
  const [topic, setTopic] = useState('');
  const showQuiz = () => {
    setTimeout(() => {
      setQuizVisible(!quizVisible);
    }, 310);
  };

  return (
    <Container>
      <Globals />
      <Progress>
        <div className="bar"></div>
      </Progress>
      <h1>Open Day Quiz</h1>
      {!quizVisible && (
        <Quizzes>
          {quiz.map(opt => (
            <QuizOption
              key={opt.topic}
              img={opt.img}
              topic={opt.topic}
              setQuiz={showQuiz}
              setTopic={setTopic}
            />
          ))}
        </Quizzes>
      )}
      {quizVisible && <Quiz topic={topic} />}
      <Footer>Criado por Ana Leão & Ladislau Paiva</Footer>
    </Container>
  );
}
