import { FC } from 'react';

import './heroSection.scss';

export const HeroSection: FC = () => {
  return (
    <>
      <section className="hero container">
        <div className="hero__inner">
          <p className="section-description">Сөздүн күчү - максаты:</p>
          <h2 className="hero__title">Жаратыңыз, шыктандырыңыз, дүйнөнү өзгөртүңүз!</h2>
          <p className="hero__text">
            Сөздөрдүн маанисин жана таасирин түшүнүүнү кеңейтүү, тилди аң-сезимдүү колдонууга жардам
            берүү. Сөздүн күчү дүйнөнү өзгөртүүгө шактандыраарын жеткирүү.
          </p>
        </div>
      </section>
    </>
  );
};
