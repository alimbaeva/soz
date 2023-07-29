import { FC, useEffect, useState } from 'react';
import { CardsShortStory } from '../../components/cards/CardsShortStory';
import { StoryBockBtn } from '../../components/UI-kit/buttons/StoryBockBtn';
import { DataI, TPosts } from '../../types/TypesComponents';
import './trueStory.scss';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { GetPosts } from '../../store/contentReducer';

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
                    id={el.id}
                    key={el.id + el.title}
                    title={el.title}
                    text={el.text}
                    personal={el.author.username}
                  />
                );
              } else {
                return (
                  <CardsShortStory
                    id={el.id}
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
