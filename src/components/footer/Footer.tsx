import React from 'react';
import idea from '../../assets/icons/idea.svg';
import undp from '../../assets/icons/undp.svg';
import logo from '../../assets/images/logo.svg';
import { SocialNetwork } from '../UI-kit/socialNetwork/SocialNetwork';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="container">
      <div className="logo_block">
        <img src={idea} alt="logo idea" />
        <img src={undp} alt="logo undp" />
        <img src={logo} alt="logo logo" />
      </div>
      <h2>
        IDEA Борбордук Азия тарабынан, UNDEF <br /> колдоосу менен 2023-жылы түзүлгөн
      </h2>
      <SocialNetwork />
      <h3>©2023 IDEA Борбордук Азия</h3>
    </footer>
  );
};
