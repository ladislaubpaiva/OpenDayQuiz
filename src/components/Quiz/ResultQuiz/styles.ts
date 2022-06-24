import styled from 'styled-components';

export const ScoreArea = styled.section`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
  text-align: center;
  button {
    border: 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ccc;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;
export const ScoreText = styled.h2`
  color: #000;
  font-size: 23px;
  margin-top: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const ScorePct = styled.h3`
  color: ${props => props.color};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const ScoreResult = styled.h3`
  font-size: 16px;
  color: #000;
  margin-bottom: 10px;
`;
