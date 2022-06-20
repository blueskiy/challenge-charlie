import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { getBackgroundImage } from '../../services/background';

export const AppContainer = () => {
  const [backgroundImage, setBackgroundImage] = useState(undefined);

  useEffect(() => {
    getBackgroundImage(setBackgroundImage);
  }, []);

  return (
    <React.Fragment>
      {backgroundImage ? (
        <Container backgroundImage={backgroundImage} />
      ) : (
        'Loading...'
      )}
    </React.Fragment>
  );
};
