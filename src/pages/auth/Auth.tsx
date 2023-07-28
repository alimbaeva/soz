import { FC, useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ISiginUp } from '../../types/TypesComponents';
import { RootState, store } from '../../store';
import { Login, SiginUp } from '../../store/authUserReducer';

import LoginIcon from '../../assets/icons/login-icon.svg';
import PasswordIcon from '../../assets/icons/password-icon.svg';

import './auth.scss';

export const Auth: FC = () => {
  const { isRegister, isAuth } = useSelector((state: RootState) => state.AuthReducer);

  const [showRegister, setShowRegister] = useState(false);
  const [formValueRegister, setFormValueRegister] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISiginUp>();

  const onSubmit: SubmitHandler<ISiginUp> = (data) => {
    if (showRegister) {
      const dataUser = {
        username: data.username,
        password1: data.password1,
        password2: data.password2,
      };
      setFormValueRegister(dataUser);
      setFormValue({
        username: data.username,
        password: data.password1,
      });

      store.dispatch(SiginUp(data));
    } else {
      const dataUser = {
        username: data.username,
        password: data.password1,
      };
      setFormValue(dataUser);

      console.log(dataUser);
      store.dispatch(Login(dataUser));
    }
  };

  useEffect(() => {
    if (isRegister) {
      store.dispatch(Login(formValue));
    }
  }, [isRegister]);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  return (
    <section className="auth">
      <h2 className="auth__title">{!showRegister ? 'Кирүү' : 'Катталуу'}</h2>
      <p className="auth__text">
        {!showRegister
          ? 'Сураныч, атыңызды жана паролуңузду киргизиңиз'
          : 'Сураныч, колдонуучунун маалыматын киргизиңиз'}
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <div className="auth-form__input">
          <img src={LoginIcon} alt="" />
          <input
            type="text"
            id="username"
            placeholder="Kолдонуучунун аты"
            {...register('username', { required: 'Поле обязательно для заполнения' })}
            aria-invalid={errors.username ? 'true' : 'false'}
          />
          {errors.username?.type === 'required' && <p role="alert">Сураныч, атыңызды киргизиңиз</p>}
        </div>

        <div className="auth-form__input password-input">
          <img src={PasswordIcon} alt="" />
          <input
            type="password1"
            id="password1"
            placeholder="Сыр сөз"
            {...register('password1', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 6,
                message: 'Пароль должен быть длиной не менее 6 символов',
              },
            })}
          />
          {errors.password1?.type === 'required' && (
            <p role="alert">Сураныч, паролуңузду киргизиңиз</p>
          )}
        </div>

        {showRegister && (
          <div className="auth-form__input password-input">
            <img src={PasswordIcon} alt="" />
            <input
              type="password2"
              id="password2"
              placeholder="Сыр сөздү тастыктоо"
              {...register('password2', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 6,
                  message: 'Пароль должен быть длиной не менее 6 символов',
                },
              })}
            />
            {errors.password2?.type === 'required' && (
              <p role="alert">Сураныч, паролуңузду киргизиңиз</p>
            )}
          </div>
        )}

        <button type="submit" className="submit-button">
          {!showRegister ? 'Кирүү' : 'Катталуу'}
        </button>

        <div>
          <h5 className="question">
            {!showRegister ? (
              <>
                Аккаунтуңуз жокбу?
                <span onClick={() => setShowRegister(true)}>Каталуу</span>
              </>
            ) : (
              <>
                Аккаунтуңуз барбы?
                <span onClick={() => setShowRegister(false)}>Кирүү</span>
              </>
            )}
          </h5>
        </div>
      </form>
    </section>
  );
};
