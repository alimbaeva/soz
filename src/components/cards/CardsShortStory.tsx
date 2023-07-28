import { FC } from 'react';
// import like from '../../assets/icons/like.svg';
// import dislike from '../../assets/icons/dislike.svg';
// import message from '../../assets/icons/message.svg';
import userCircle from '../../assets/icons/userCircle.svg';
import { DataI } from '../../types/TypesComponents';
import './cardsShortStory.scss';
import { Analysis } from '../UI-kit/analysis/Analysis';
import { randomNumber } from '../../utils/randomNumber';

const collors = ['#EFFF9F', '#FFD36F', '#AF9FFF', '#589EF4', '#FD97E9'];

export const CardsShortStory: FC<DataI> = ({ title, text }: DataI) => {
  const num = randomNumber(collors.length - 1);

  return (
    <div key={title} className="card" style={{ backgroundColor: `${collors[num]}` }}>
      <div className="card__body">
        <h4>{title}</h4>
        <p>{text}</p>
        <section>
          <Analysis />
        </section>
      </div>
      <div className="card__footer">
        <img src={userCircle} alt="" />
        <p>
          Колдонуучу
          <span>1</span>
        </p>
      </div>
    </div>
  );
};
