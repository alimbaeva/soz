import React from 'react';
import { Analysis } from '../UI-kit/analysis/Analysis';
import { randomNumber } from '../../utils/randomNumber';
import woman from '../../assets/icons/woman.svg';
import './cardWords.scss';

const collors = ['#EFFF9F', '#FFD36F', '#AF9FFF', '#589EF4', '#FD97E9'];

export const CardWords = () => {
  const num = randomNumber(collors.length - 1);

  return (
    <>
      <div className="card__word" style={{ backgroundColor: `${collors[num]}` }}>
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="foto"
          />
        </div>
        <div className="card__texts">
          <div>
            <h5>Өркүнүң өскүр</h5> <span>40 мүнөт мурун</span>
          </div>
          <p>Өркүнүң өскүр деген эмнени түшүндүрөт?</p>
          <div className="card_btns">
            <button>Жооп беруу</button>
            <Analysis />
          </div>
        </div>
      </div>
      <div className="card__word" style={{ backgroundColor: `${collors[num]}` }}>
        <div className="img">
          <img src={woman} alt="foto" />
        </div>
        <div className="card__texts">
          <div>
            <h5>Өркүнүң өскүр</h5> <span>40 мүнөт мурун</span>
          </div>
          <p>Өркүнүң өскүр деген эмнени түшүндүрөт?</p>
          <div className="card_btns">
            <button>Жооп беруу</button>
            <Analysis />
          </div>
        </div>
      </div>
    </>
  );
};
