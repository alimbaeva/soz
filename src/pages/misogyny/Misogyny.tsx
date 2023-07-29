import React from 'react';
import { CardWords } from '../../components/cards/CardWords';
import './misogyny.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Misogyny = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <section className="misogyny">
      <h1>Мизогония</h1>
      <CardWords />
      <button className={themes ? 'button btn_Bl_border' : 'button btn_Li_border'}>
        Кийинки сөздөр
      </button>
    </section>
  );
};
