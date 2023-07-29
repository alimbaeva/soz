import React, { FC } from 'react';
import likeIcon from '../../../assets/icons/like.svg';
import dislikeIcon from '../../../assets/icons/dislike.svg';
import message from '../../../assets/icons/message.svg';
import './analysis.scss';

interface IAnalysis {
  like: number;
  dislike: number;
  countComments: number;
}

export const Analysis: FC<IAnalysis> = ({ like, dislike, countComments }: IAnalysis) => {
  return (
    <div className="card__analysis">
      <div className="svg__like">
        <img src={likeIcon} alt="rrr" />
        <span style={{ color: '#006D57' }}>{like}</span>
      </div>
      <div className="svg__dislike">
        <img src={dislikeIcon} alt="" />
        <span style={{ color: '#910505' }}>{dislike}</span>
      </div>
      <div className="svg__messege">
        <img src={message} alt="" />
        <span style={{ color: '#676767' }}>{countComments}</span>
      </div>
    </div>
  );
};
