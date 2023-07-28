import { FC } from 'react';

import { PostForm } from '../../components/postForm/PostForm';

import './postPublish.scss';

export const PostPublish: FC = () => {
  return (
    <section className="post-publish container">
      <h2>Пост жарыялоо</h2>
      <p className="post-publish__descr">
        Мизогиния сөздөрдү аныктамасы менен, өзүңүздүн же тааныштарыңыздын окуясы менен бөлүшүңүз.
      </p>
      <PostForm />
    </section>
  );
};
