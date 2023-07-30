import React, { FC } from 'react';
import love from '../../../assets/icons/love.svg';
import message from '../../../assets/icons/message.svg';
import './analysis.scss';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../../store';
import { RemoveLike, SetLike } from '../../../store/contentReducer';

interface IAnalysis {
  id: number;
  like: number;
  dislike: number;
  countComments: number;
}

export const Analysis: FC<IAnalysis> = ({ id, like, dislike, countComments }: IAnalysis) => {
  const { userData } = useSelector((state: RootState) => state.AuthReducer);
  const { isLike } = useSelector((state: RootState) => state.ContentReducer);

  const handleLike = () => {
    if (userData.token) {
      if (!isLike) store.dispatch(SetLike({ id, tokenUser: userData.token }));
      if (isLike) store.dispatch(RemoveLike({ id, tokenUser: userData.token }));
    }
  };

  return (
    <div className="card__analysis">
      <div className="svg__like" onClick={handleLike}>
        <img src={love} alt="" />
        <span style={{ color: '#006D57' }}>{like}</span>
      </div>
      <div className="svg__messege">
        <img src={message} alt="" />
        <span style={{ color: '#676767' }}>{countComments}</span>
      </div>
    </div>
  );
};
