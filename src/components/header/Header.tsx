import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from '../UI-kit/translate/Translate';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { setThemes } from '../../store/themeReducer';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';

import './header.scss';

import logo from '../../assets/images/logo.svg';
import { setExit } from '../../store/authUserReducer';

export const Header: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);
  const { isAuth } = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleTheme = () => {
    localStorage.setItem('themes', JSON.stringify(!themes));
    dispatch(setThemes(!themes));
  };

  const handleExit = () => {
    dispatch(setExit());
  };

  return (
    <>
      <header className="header">
        <div className="header__inner container">
          <Link className="header__logo" to={'./'}>
            <img src={logo} alt="" />
          </Link>
          <div className="appbar">
            <button className="cange__theme" onClick={handleTheme}>
              {themes ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
            </button>
            <Translate />
            {isAuth ? (
              <button
                onClick={handleExit}
                className={themes ? 'signIn-btn btn_Bl_border' : 'signIn-btn btn_Li_border'}
              >
                Чыгуу
              </button>
            ) : (
              <Link to="/auth">
                <button
                  className={themes ? 'signIn-btn btn_Bl_border' : 'signIn-btn btn_Li_border'}
                >
                  Кирүү
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
