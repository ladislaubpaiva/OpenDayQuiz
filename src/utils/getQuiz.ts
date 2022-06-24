import quiz from '../api/quiz';

export function getQuiz(topic: string) {
  const quizLength = quiz.length;
  let actualQuiz = 0;
  for (let i = 0; i < quizLength; i++) {
    if (topic == quiz[i].topic) {
      actualQuiz = i;
    }
  }
  return quiz[actualQuiz];
}
