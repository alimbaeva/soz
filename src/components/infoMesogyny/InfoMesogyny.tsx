import { FC } from 'react';

import { InfoData } from '../../types/TypesComponents';

import './infoMesogyny.scss';
import { InfoList } from './InfoList';

const listItems: InfoData[] = [
  {
    title: 'Мизогиния: как полюбить женщину в себе и других?',
    link: 'https://moscowfemfest.ru/misogyny',
  },
  {
    title: 'Ж – женская мизогиния: истоки гендерных стереотипов.',
    link: 'https://trends.rbc.ru/trends/education/624176c19a7947da69bc0319',
  },
  {
    title:
      'Почему женщины ненавидят: что такое женская мизогиния и как она влияет на гендерное равенство.',
    link: 'https://kiozk.ru/article/pocemu-zensiny-nenavidat-cto-takoe-zenskaa-mizoginia-i-kak-ona-vliaet-na-gendernoe-ravenst',
  },
  {
    title:
      'Сама себе враг: как мизогиния в женской среде мешает карьере не меньше гендерной дискриминации.',
    link: 'https://www.forbes.ru/forbes-woman/422565-sama-sebe-vrag-kak-mizoginiya-v-zhenskoy-srede-meshaet-karere-ne-menshe',
  },
];

export const InfoMesogyny: FC = () => {
  return (
    <div className="info container">
      <h2 className="info__title">Мизогиния жөнүндө дүйнөдө эмне кеп?</h2>
      <InfoList listItems={listItems} />
    </div>
  );
};
