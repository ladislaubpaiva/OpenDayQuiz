import { useState } from 'react';
import { ScoreArea, ScorePct, ScoreText, ScoreResult } from './styles';
import PrizeImg from '../../../assets/prize.png';

export default function ResultQuiz({
  correct,
  quiz,
}: {
  correct: number;
  quiz: number;
}) {
  let scoreTxt: string,
    scoreColor: string,
    scorePct: string,
    scoreResult: string;
  const points = Math.floor((correct / quiz) * 100);
  if (points <= 30) {
    scoreTxt = 'Mau';
    scoreColor = 'red';
  } else if (points <= 50) {
    scoreTxt = 'Bom';
    scoreColor = '#d34f00';
  } else if (points <= 70) {
    scoreTxt = 'Muito Bom';
    scoreColor = 'yellow';
  } else if (points <= 90) {
    scoreTxt = 'Ótimo';
    scoreColor = '#0d630d';
  } else {
    scoreTxt = 'Excelente';
    scoreColor = '#dda520';
  }
  scorePct = `Acertou ${points}%`;
  scoreResult = `Você respondeu ${quiz} acertou ${correct}`;

  return (
    <ScoreArea>
      <img src={PrizeImg} height={100} />
      <ScoreText>{scoreTxt}</ScoreText>
      <ScorePct color={scoreColor}>{scorePct}</ScorePct>
      <ScoreResult>{scoreResult}</ScoreResult>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Repetir
      </button>
    </ScoreArea>
  );
}
