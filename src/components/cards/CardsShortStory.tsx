import { FC } from 'react';
import userCircle from '../../assets/icons/userCircle.svg';
import { DataI } from '../../types/TypesComponents';
import { Analysis } from '../UI-kit/analysis/Analysis';
import { randomNumber } from '../../utils/randomNumber';
import { useNavigate } from 'react-router-dom';

import { store } from '../../store';
import { GetPost } from '../../store/contentReducer';

import './cardsShortStory.scss';

const collors = ['#EFFF9F', '#FFD36F', '#AF9FFF', '#589EF4', '#FD97E9'];

export const CardsShortStory: FC<DataI> = ({ id, title, text, personal }: DataI) => {
  const num = randomNumber(collors.length - 1);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trueStory/${id}`);
    store.dispatch(GetPost(id));
  };

  return (
    <div
      onClick={handleClick}
      key={title}
      className="card"
      style={{ backgroundColor: `${collors[num]}` }}
    >
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
          {personal}
          <span>1</span>
        </p>
      </div>
    </div>
  );
};
