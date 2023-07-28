import { FC } from 'react';
import { StoryExtended } from '../../components/storyExtended/StoryExtended';
import './trueStoryExtended.scss';

export const TrueStoryExtended: FC = () => {
  return (
    <section className="container story__extended">
      <h2>Болгон окуя</h2>
      <StoryExtended />
    </section>
  );
};
