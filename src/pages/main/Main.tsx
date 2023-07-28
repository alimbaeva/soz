import { FC } from 'react';
import './main.scss';

import { TopScreen } from '../../components/topscreen/TopScreen';
import { HeroSection } from '../../components/hero/HeroSection';
import { CardMenu } from '../../components/cards/CardMenu';
import { InfoMesogyny } from '../../components/infoMesogyny/InfoMesogyny';

export const Main: FC = () => {
  return (
    <>
      <TopScreen />
      <HeroSection />
      <CardMenu />
      <InfoMesogyny />
    </>
  );
};
