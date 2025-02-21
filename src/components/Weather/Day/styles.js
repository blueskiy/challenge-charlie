import styled, { css } from 'styled-components';
import { media } from '../../../styles/devices';

const conditionalBackground = css`
  background-color: ${({ theme, id }) =>
    id === 1 ? theme.secondDay : theme.thirdDay};
`;

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  transition: all 300ms ease-in;

  cursor: ${({ isOpen }) => (isOpen ? 'default' : 'pointer')};

  ${({ theme, id }) =>
    id === 0 ? `background-color: ${theme.firstDay}` : conditionalBackground};

  ${media.mobileS} {
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '31rem' : '8.6rem')};
  }

  ${media.mobileM} {
    height: ${({ isOpen }) => (isOpen ? '31rem' : '5.85rem')};
  }

  ${media.laptop} {
    flex-direction: row;
    height: ${({ isOpen }) => (isOpen ? '55.5vh' : '16vh')};
  }
`;
