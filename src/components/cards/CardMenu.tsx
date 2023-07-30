import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import storyShare from '../../assets/images/share-img.png';
import mesogyny from '../../assets/images/mesogeny-img.png';
import searching from '../../assets/images/Searching - Looking.png';

import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { GetComments } from '../../store/contentReducer';

import './CardMenu.scss';

export const CardMenu: FC = () => {
  const { post, commentsIsPosts } = useSelector((state: RootState) => state.ContentReducer);
  const { userData } = useSelector((state: RootState) => state.AuthReducer);

  useEffect(() => {
    store.dispatch(GetComments({ id: post.id, tokenUser: userData.token }));
  }, []);

  return (
    <>
      <ul className="cardMenu container">
        <li className="cardMenu-item">
          <Link to="/postPublish" className="cardMenu-item__inner">
            <div className="img-block">
              <img src={storyShare} alt="" />
            </div>
            <h3 className="cardMenu-item__title">Окуяңыз менен бөлүшүңүз</h3>
            <p className="cardMenu-item__descr">
              Өзүңүздүн же жакындарыңыздын окуясы менен бөлүшүңүз
            </p>
            <div className="first-line-buttons">
              <button className="card-menu__button">Жаңы окуя кош</button>
              <svg
                className="card-arrows"
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.3693 31.9273L42.9225 49.9254M42.9225 49.9254L24.9245 44.4786M42.9225 49.9254L26.7852 19.782"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="1" y="1" width="67" height="67" rx="33.5" stroke="black" strokeWidth="2" />
              </svg>
            </div>
          </Link>
        </li>
        <li className="cardMenu-item">
          <Link to="/misogyny" className="cardMenu-item__inner">
            <div className="img-block">
              <img src={mesogyny} alt="" />
            </div>
            <h3 className="cardMenu-item__title">Мизогиния</h3>
            <p className="cardMenu-item__descr">Аялдарды жектөө сөздөрүн жок кылуу.</p>
            <div className="first-line-buttons">
              <button className="card-menu__button">Жаңы сөз кош</button>
              <svg
                className="card-arrows"
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.3693 31.9273L42.9225 49.9254M42.9225 49.9254L24.9245 44.4786M42.9225 49.9254L26.7852 19.782"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="1" y="1" width="67" height="67" rx="33.5" stroke="black" strokeWidth="2" />
              </svg>
            </div>
          </Link>
        </li>
        <li className="cardMenu-item">
          <Link to="" className="cardMenu-item__inner">
            <img src="" alt="" />
            <h3 className="cardMenu-item__title">Кастык тили</h3>
            <p className="cardMenu-item__descr">
              Кастык тили - бул адамдык этникалык, диний, жыныстык ...
            </p>
            <button className="card-menu__button">Кененирээк</button>
          </Link>
        </li>
        <li className="cardMenu-item">
          <Link to="" className="cardMenu-item__inner">
            <img src="" alt="" />
            <h3 className="cardMenu-item__title">Кел, тест ойнойлу</h3>
            <p className="cardMenu-item__descr">Келиңиз тест ойнойлу.</p>
            <button className="card-menu__button">Ойноо</button>
          </Link>
        </li>
        <li className="cardMenu-item">
          <Link to="/question" className="cardMenu-item__inner">
            <img src="" alt="" />
            <h3 className="cardMenu-item__title">Сурамжылоо</h3>
            <p className="cardMenu-item__descr">
              Мизогиния маселеси боюнча сурамжылоого катышсаңыз болот.
            </p>
            <button className="card-menu__button">Катышуу</button>
          </Link>
          <img className="searching-img" src={searching} alt="" />
        </li>
      </ul>
    </>
  );
};
