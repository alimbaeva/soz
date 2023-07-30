import React from 'react';
import { RenderYoutube } from '../../components/player/RenderYoutube';
import './podcast.scss';
import { randomNumber } from '../../utils/randomNumber';
import { AudioPlayer } from '../../components/player/AudioPlayer';
import sound1 from '../../assets/podcast/sound1.mp3';
import sound2 from '../../assets/podcast/Критерии обидчика.mp3';
import sound3 from '../../assets/podcast/2. Жизнь без насилия.mp3';
import sound4 from '../../assets/podcast/sound4.mp3';
import fone1 from '../../assets/images/fone1.png';
import fone2 from '../../assets/images/fone2.png';
import fone3 from '../../assets/images/fone3.png';
import fone4 from '../../assets/images/fone4.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const collors = ['#EFFF9F', '#FFD36F', '#AF9FFF', '#589EF4', '#FD97E9'];
const sound = [
  {
    title: 'Мизогиния деген эмне?',
    url: sound1,
  },
  {
    title: '"Мээрим тилин" кантип өнүктүрөбүз?',
    url: sound2,
  },
  {
    title: 'Кастык тилине жол жок! Өзүңдүн чегиңди сактаганды үйрөн!',
    url: sound3,
  },
  {
    title: 'Коомчулуктагы "стреотипттер".',
    url: sound4,
  },
];

const fakeDate = [
  {
    id: 'WSqc_awFoik',
    title: 'Мизогиния деген эмне?',
    sapTitle: 'Мизогиния деген эмне? Коомчулуктагы кастык сөздөрдүн орду.',
  },
  {
    id: 'sZMzLC-J2wE',
    title: '"Мээрим тилин" кантип өнүктүрөбүз?',
    sapTitle: '"Мээрим тилин" кантип өнүктүрөбүз? Ар бир жаран салым кошсо болот.',
  },
  {
    id: 'WSqc_awFoik',
    title: 'Коомчулуктагы "стреотипттер".',
    sapTitle: 'Коомчулуктун ойун угуп, ой-жүгүртөбүз.',
  },
  {
    id: 'sZMzLC-J2wE',
    title: 'Кастык тилине жол жок! Өзүңдүн чегиңди сактаганды үйрөн!',
    sapTitle: 'Өзүңдүн чегиңди сактаганды үйрөнүп, кастык тилине жол бербе.',
  },
];

const i = [fone1, fone2, fone3, fone4];

export const Podcast = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <section className="container podcast">
      <h1>Подкасттар</h1>
      <section className="podcast__section">
        {fakeDate.map((el, id) => {
          const num = randomNumber(collors.length - 1);
          return (
            <div key={id} className="youtube__parant-block">
              <div className="youtube__block" style={{ borderColor: `${collors[num]}` }}>
                <RenderYoutube idVideo={el.id} />
              </div>
              <h2>{el.title}</h2>
              <p>{el.sapTitle}</p>
            </div>
          );
        })}
        <button className={themes ? 'button btn_Bl_border' : 'button btn_Li_border'}>
          Кийинки видеолор
        </button>
      </section>
      <section className="audio">
        {sound.map((el, id) => {
          const num = randomNumber(i.length - 1);
          return (
            <div className="audio__podcast" key={id}>
              <div className="title-image">
                <img src={i[num]} alt="" />
              </div>
              <div className="audio__supblock">
                <div className="audio__text">
                  <p>Создун кучу</p>
                  <h5>{el.title}</h5>
                </div>
                <AudioPlayer audioSrc={el.url} />
              </div>
            </div>
          );
        })}
      </section>
      <button className={themes ? 'button btn_Bl_border' : 'button btn_Li_border'}>
        Кийинки подкастар
      </button>
    </section>
  );
};
