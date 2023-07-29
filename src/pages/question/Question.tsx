import { FC } from 'react';
import { Link } from 'react-router-dom';

import './question.scss';

import arrowIcon from '../../assets/icons/chevron-down.svg';

export const Question: FC = () => {
  return (
    <div className="question">
      <h2 className="question__title">Сурамжылоо</h2>
      <p className="question__descr">
        Сурамжылоого катышып, коомдогу көйгөйгө салым кошуңуз. Каалаган карточканы басып,
        сурамжылоого катышсаңыз болот.
      </p>
      <div className="question__list">
        <Link
          to="https://quizizz.com/admin/quiz/64c4960fa69d02000809b89e?source=quiz_share"
          className="question__list-item"
        >
          Биринчи сурамжылоо <img src={arrowIcon} alt="" />
        </Link>
        <Link to="/" className="question__list-item">
          Экинчи сурамжылоо <img src={arrowIcon} alt="" />
        </Link>
        <Link to="/" className="question__list-item">
          Үчүнчү сурамжылоо <img src={arrowIcon} alt="" />
        </Link>
        <Link to="/" className="question__list-item">
          Төртүнчү сурамжылоо <img src={arrowIcon} alt="" />
        </Link>
        <Link to="/" className="question__list-item">
          Бешинчи сурамжылоо <img src={arrowIcon} alt="" />
        </Link>
        <Link to="/" className="question__list-item">
          Алтынчы сурамжылоо <img src={arrowIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};
