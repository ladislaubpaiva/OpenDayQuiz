import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    top: 1rem;
    left: 50%;
    position: absolute;
    font-size: 2.8rem;
    font-variant: small-caps;
    transform: translateX(-50%);
  }
`;

export const Quizzes = styled.section`
  display: grid;
  gap: 1.6rem;
  margin-top: 100px;
  grid-template-columns: repeat(3, 350px);
  transition: 0.3s;
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
