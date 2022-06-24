import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body{
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f5f5f5;
  background-color: #333;
  font-family: Arial, Helvetica, sans-serif;
}
`;
