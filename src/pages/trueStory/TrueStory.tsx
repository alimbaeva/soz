import { FC, useEffect, useState } from 'react';
import { CardsShortStory } from '../../components/cards/CardsShortStory';
import { StoryBockBtn } from '../../components/UI-kit/buttons/StoryBockBtn';
import { DataI, TPosts } from '../../types/TypesComponents';
import './trueStory.scss';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { GetPosts } from '../../store/contentReducer';

const data: DataI[] = [
  {
    title: 'Поступать в компьютерную инженерию девочкам нельзя.',
    text: 'После школы все мне говорили что поступать в компьютерную инженерию нельзя т.к. я девочка и из-за этого поступила в менеджмент',
    personal: 'Колдонуучу 1',
  },
  {
    title: '“Никому не говорите, что муж душил, это плохо для репутации!”',
    text: 'Маме все время не нравится, что мои дочки не умеют по хозяйству работать).. потом выйдут замуж и как они будут хозяйство вести. они отвечают, уже сейчас есть роботы делают все, пока они вырастут, еще много чего появится.. ',
    personal: 'Колдонуучу 2 ',
  },
  {
    title: 'При поиске работы.',
    text: 'При поиске работы , у нас в стране не смотрят на твои навыки, на твой опыт работы. Первый вопрос который задают в большинстве случаев на собеседовании: Замужем ли ты и есть ли  дети? ',
    personal: 'Колдонуучу 2 ',
  },
  {
    title: 'Поступать в компьютерную инженерию девочкам нельзя.',
    text: 'После школы все мне говорили что поступать в компьютерную инженерию нельзя т.к. я девочка и из-за этого поступила в менеджмент',
    personal: 'Колдонуучу 2 ',
  },
  {
    title: 'Мне плевать на мнения окружающих.',
    text: 'Мой муж из Лейлека, после свадьбы когда начали вместе жить и вместе начали работать. Я иногда шла вперед, когда была узкая дорога и в один  день он специально наступил мне на ногу, я его спросила зачем ты мне на ногу наступил, а он говорить почему ты перед меня идешь. ',
    personal: 'Колдонуучу 2 ',
  },
  {
    title: 'Этими вопросами должны заниматься мужья, женщины ничего не смогут.',
    text: 'Мы как то по вопросу отремонтировать дороги приглашали депутата горкенеша. Инициатором собрания была я, ну и спрашиваю у депутатов когда вы сделаете, почему не делаете. ',
    personal: 'Колдонуучу 2 ',
  },
];

export const TrueStory: FC = () => {
  const countCard = 6;

  const { themes } = useSelector((state: RootState) => state.ThemesReducer);
  const { posts } = useSelector((state: RootState) => state.ContentReducer);

  const [data, setData] = useState<TPosts[]>([]);

  useEffect(() => {
    if (!posts.length) store.dispatch(GetPosts());
  }, []);

  useEffect(() => {
    setData(posts);
    console.log(posts);
  }, [posts]);

  return (
    <section className="container true__story">
      <h1>Болгон окуялар</h1>
      <div className="story__block-btn">
        <StoryBockBtn />
      </div>
      <div className="cards__block">
        {posts.length
          ? posts.map((el, id) => {
              if (id === 1) {
                return (
                  <CardsShortStory
                    key={el.id + el.title}
                    title={el.title}
                    text={el.text}
                    personal={el.author.username}
                  />
                );
              } else {
                return (
                  <CardsShortStory
                    key={id}
                    title={el.title}
                    text={el.text}
                    personal={el.author.username}
                  />
                );
              }
            })
          : ''}
      </div>
      {posts.length < countCard ? (
        ''
      ) : (
        <button className={themes ? 'btn_Bl_border' : 'btn_Li_border'}>Кийинки окуялар</button>
      )}
    </section>
  );
};
