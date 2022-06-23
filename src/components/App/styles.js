import styled from 'styled-components';
import { media } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  ${media.mobileS} {
    width: 100vw;
  }

  ${media.tablet} {
    width: 50vw;
  }
`;
