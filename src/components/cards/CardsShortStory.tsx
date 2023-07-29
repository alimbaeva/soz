import { FC } from 'react';
import userCircle from '../../assets/icons/userCircle.svg';
import { DataI, TPosts } from '../../types/TypesComponents';
import { Analysis } from '../UI-kit/analysis/Analysis';
import { randomNumber } from '../../utils/randomNumber';
import { useNavigate } from 'react-router-dom';

import { store } from '../../store';
import { GetPost } from '../../store/contentReducer';

import './cardsShortStory.scss';

const collors = ['#EFFF9F', '#FFD36F', '#AF9FFF', '#589EF4', '#FD97E9'];

interface TPost {
  post: {
    id: number;
    author: {
      username: string;
    };
    title: string;
    text: string;
    hashtag: string;
    likes: number;
    user_liked: boolean;
  };
}

export const CardsShortStory: FC<TPost> = (post: TPost) => {
  const num = randomNumber(collors.length - 1);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trueStory/${post.post.id}`);
    store.dispatch(GetPost(post.post.id));
  };

  return (
    <div
      onClick={handleClick}
      key={post.post.title}
      className="card"
      style={{ backgroundColor: `${collors[num]}` }}
    >
      <div className="card__body">
        <h4>{post.post.title}</h4>
        <p>{post.post.text}</p>
        <section>
          <Analysis id={post.post.id} like={post.post.likes} dislike={0} countComments={0} />
        </section>
      </div>
      <div className="card__footer">
        <img src={userCircle} alt="" />
        <p>
          {post.post.author.username}
          <span>1</span>
        </p>
      </div>
    </div>
  );
};
