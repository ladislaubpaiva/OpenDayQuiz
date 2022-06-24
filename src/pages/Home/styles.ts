import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2.8rem;
    font-variant: small-caps;
  }
`;

export const Quizzes = styled.section`
  display: grid;
  gap: 1.6rem;
  margin-top: 100px;
  grid-template-columns: repeat(3, 350px);
  justify-content: center;
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
`;
export const Progress = styled.div`
  height: 5px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  div {
    width: 0%;
    background-color: #00ff00;
    height: 100%;
    transition: all ease 0.5s;
  }
`;
