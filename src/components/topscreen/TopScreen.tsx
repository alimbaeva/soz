import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import './topScreen.scss';
import { SocialNetwork } from '../UI-kit/socialNetwork/SocialNetwork';

export const TopScreen: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <>
      <div className="topscreen container">
        <div className="topscreen__wrapper">
          <div className="topscreen__inner">
            <p className="section-description">Сөздүн күчүн караңыз!</p>
            <h1 className="topscreen__title">
              <span className="first-word">Аял </span> - ааламдын {''}
              <span className="last-word">жүрөгү</span>
            </h1>
            <div className="btn-group">
              <button className={themes ? 'white-btn button_Full_Li' : 'white-btn button_Full_Bl'}>
                Окуялар
                <Link className="bunner__link" to="/trueStory" />
              </button>
              <button className={themes ? 'banner-btn btn_Bl_border' : 'banner-btn btn_Li_border'}>
                <svg
                  className="play-icon"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.2344 13.4168L10.35 3.08787C10.0653 2.91355 9.7393 2.81839 9.40556 2.81221C9.07182 2.80603 8.74249 2.88905 8.45156 3.05271C8.16341 3.21382 7.92337 3.44878 7.75613 3.73342C7.58889 4.01806 7.50048 4.34211 7.5 4.67224V25.3277C7.50217 25.8229 7.7009 26.297 8.0525 26.6457C8.40409 26.9945 8.87979 27.1893 9.375 27.1875C9.72065 27.1873 10.0596 27.092 10.3547 26.9121L27.2344 16.5832C27.5057 16.4178 27.7299 16.1854 27.8855 15.9084C28.0411 15.6313 28.1228 15.3189 28.1228 15.0011C28.1228 14.6834 28.0411 14.371 27.8855 14.0939C27.7299 13.8169 27.5057 13.5845 27.2344 13.4191V13.4168ZM9.375 25.3054V4.68747L26.2301 15L9.375 25.3054Z"
                    fill={themes ? '#FFF' : '#000'}
                  />
                </svg>
                Подкасттар
                <Link className="bunner__link" to="/podcast" />
              </button>
            </div>
          </div>
          <SocialNetwork className="custom-button-group" />
        </div>
      </div>
    </>
  );
};
