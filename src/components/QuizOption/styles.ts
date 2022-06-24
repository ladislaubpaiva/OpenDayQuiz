import styled from 'styled-components';

export const Option = styled.div`
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);

  & > * {
    transition: 0.3s;
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    filter: blur(1px);
  }
  h2 {
    text-align: center;
    margin: 15px 0;
  }

  &:hover {
    img {
      filter: blur(0px);
      transform: scale(1.1);
    }
    h2 {
      filter: brightness(0.6);
    }
  }
`;
