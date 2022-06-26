import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: ${({ isWeather }) => (isWeather ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: ${({ isWeather }) => (isWeather ? 'auto' : '85vh')};

  img {
    width: 14rem;
    margin-bottom: 1rem;
  }

  p {
    color: #fff;
    font-size: 2rem;
  }
`;
