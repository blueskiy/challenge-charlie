import styled from 'styled-components';
import { media } from '../../../styles/devices';

export const TopInfoContainer = styled.div`
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

  ${media.laptop} {
    ${({ isOpen }) => (isOpen ? 'padding-top: 1rem' : 'padding-top: 0')}
  }

  ${media.desktop} {
    button {
      font-size: 3rem;
    }
  }
`;
