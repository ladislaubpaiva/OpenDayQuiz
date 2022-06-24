import styled from 'styled-components';

export const QuestionArea = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  max-width: 500px;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  object-position: center top;
  clip-path: circle();
  @media (min-width: 768px) {
    height: 400px;
    max-width: 400px;
  }
`;

export const Question = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 22px;
  margin: 20px 0;
`;
export const Options = styled.ul`
  color: #fff;
  font-size: 18px;
  margin: 20px 0;
`;
export const Option = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-bottom: 5px;
  color: #aaa;
  font-size: 18px;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-left: 5px;
    margin-right: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #555;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
