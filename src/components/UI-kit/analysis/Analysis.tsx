import React from 'react';
import like from '../../../assets/icons/like.svg';
import dislike from '../../../assets/icons/dislike.svg';
import message from '../../../assets/icons/message.svg';
import './analysis.scss';

export const Analysis = () => {
  return (
    <div className="card__analysis">
      <div className="svg__like">
        <img src={like} alt="rrr" />
        <span style={{ color: '#006D57' }}>1</span>
      </div>
      <div className="svg__dislike">
        <img src={dislike} alt="" />
        <span style={{ color: '#910505' }}>2</span>
      </div>
      <div className="svg__messege">
        <img src={message} alt="" />
        <span style={{ color: '#676767' }}>2</span>
      </div>
    </div>
  );
};
