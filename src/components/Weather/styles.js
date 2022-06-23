import styled, { css, keyframes } from 'styled-components';
import { media } from '../../styles/devices';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const conditionalBackground = css`
  background-color: ${({ theme, id }) =>
    id === 2 ? theme.normal.secondDay : theme.normal.thirdDay};
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
    id === 1
      ? `background-color: ${theme.normal.firstDay}`
      : conditionalBackground};

  ${media.mobileS} {
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '27rem' : '5.3rem')};
  }

  ${media.mobileM} {
    height: ${({ isOpen }) => (isOpen ? '31rem' : '5.85rem')};
  }

  ${media.laptop} {
    flex-direction: row;
    height: ${({ isOpen }) => (isOpen ? '31rem' : '8.6rem')};
  }

  ${media.desktop} {
    height: ${({ isOpen }) => (isOpen ? '33rem' : '10rem')};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: ${fadeIn} 600ms linear normal;
  }

  ${media.mobileS} {
    flex: 1;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    img {
      height: 11rem;
    }
  }

  ${media.mobileM} {
    img {
      height: 16rem;
    }
  }

  ${media.laptop} {
    flex: 1.5;
    display: unset;

    img {
      height: 23rem;
    }
  }

  ${media.desktop} {
    img {
      height: 28rem;
    }
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  flex: 1;
  color: #fff;
  height: 100%;
  position: relative;

  ${media.mobileS} {
    font-size: 1.1rem;
    margin-top: 0.4rem;
    padding-bottom: ${({ isOpen }) => (isOpen ? '1.2rem' : '0')};
  }

  ${media.mobileM} {
    margin-top: ${({ isOpen }) => (isOpen ? '0' : '0.3rem')};
  }

  ${media.laptop} {
    font-size: 1.8rem;
    justify-content: flex-end;
    padding-bottom: ${({ isOpen }) => (isOpen ? '8rem' : '1rem')};
  }

  ${media.desktop} {
    padding-bottom: ${({ isOpen }) => (isOpen ? '8rem' : '1rem')};
  }
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;

  span,
  button {
    font-weight: 600;
    text-transform: uppercase;
  }

  button {
    color: #fff;
    border: none;
    cursor: pointer;
    text-align: left;
    background: transparent;
  }

  ${media.mobileS} {
    width: 100%;
    padding-top: 0;
    position: relative;
    align-items: center;

    button {
      font-size: 1.2rem;
    }
  }

  ${media.laptop} {
    top: 0;
    padding-top: 1rem;
    position: absolute;
    align-items: flex-start;

    button {
      font-size: 2.2rem;
    }
  }

  ${media.desktop} {
    button {
      font-size: 3rem;
    }
  }
`;

export const MidInfo = styled.div`
  display: flex;
  flex-direction: column;

  animation: ${fadeIn} 600ms linear normal;

  ${media.mobileS} {
    width: 100%;
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.3rem;
    align-items: center;
  }

  ${media.laptop} {
    font-size: 2.1rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
  }

  ${media.desktop} {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 600ms linear normal;

  ${media.mobileS} {
    width: 100%;
    align-items: center;
  }

  ${media.laptop} {
    align-items: flex-start;
  }
`;
