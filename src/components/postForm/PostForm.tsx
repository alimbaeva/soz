import { FC, useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import './postForm.scss';
import { RootState, store } from '../../store';
import { CreatePost } from '../../store/contentReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ModalWindow } from '../modalWindow/ModalWindow';
import useModal from '../modalWindow/useModal';
import { useNavigate } from 'react-router-dom';
import { setShow } from '../../store/helperFormReducer';

type Inputs = {
  firstName: string;
  postText: string;
};

export const PostForm: FC = () => {
  const { userData } = useSelector((state: RootState) => state.AuthReducer);
  const { createPost } = useSelector((state: RootState) => state.ContentReducer);
  const [activeRubric, setActiveRubric] = useState<string>('');
  const { modalActive, setActive } = useModal();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    store.dispatch(
      CreatePost({
        title: data.firstName,
        text: data.postText,
        hashtag: activeRubric,
        tokenUser: userData.token,
      })
    );
  };

  const handleClick = (rubric: string) => {
    setActiveRubric(rubric);
  };

  const isButtonActive = (rubric: string) => rubric === activeRubric;

  useEffect(() => {
    if (createPost) {
      setActive();
      setTimeout(() => {
        setActive();
        navigate('/');
        dispatch(setShow(false));
      }, 300);
    }
  }, [createPost]);

  return (
    <>
      <ModalWindow active={modalActive} setActive={setActive}>
        <p>Сиздин постунуз жарыяланды. Рахмат болушконунузго.</p>
      </ModalWindow>
      <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="post-form__input-block">
          <label htmlFor="firstName">
            Аталышы<span>*</span>
          </label>
          <p className="post-form__descr">Посттуңуздун, окуяңыздын, сөзүңүздүн темасы</p>
          <input
            className="post-form__input-name"
            id="firstName"
            type="text"
            placeholder="Аталышы"
            {...register('firstName', {
              required: true,
            })}
          />
          <div>{errors.firstName && <p>Минимум 3 символов</p>}</div>
        </div>
        <div className="post-form__input-block">
          <label htmlFor="heading">
            Рубриканы тандоо<span>*</span>
          </label>
          <div className="heading-buttons">
            <input
              type="button"
              value="#сөздүнкүчү"
              className={isButtonActive('#сөздүнкүчү') ? 'active' : ''}
              onClick={() => handleClick('#сөздүнкүчү')}
            />
            <input
              type="button"
              value="#болгонокуя"
              className={isButtonActive('#болгонокуя') ? 'active' : ''}
              onClick={() => handleClick('#болгонокуя')}
            />
            <input
              type="button"
              value="#мизогония"
              className={isButtonActive('#мизогония') ? 'active' : ''}
              onClick={() => handleClick('#мизогония')}
            />
            <input
              type="button"
              value="#кастыктили"
              className={isButtonActive('#кастыктили') ? 'active' : ''}
              onClick={() => handleClick('#кастыктили')}
            />
          </div>
        </div>
        <div className="post-form__input-block">
          <label htmlFor="foto">Сүрөт жүктөө</label>
          <p className="post-form__descr">Постуңузга сүрөт жүктөө үчүн</p>
          <input
            className="post-form__input-foto"
            id="foto"
            name="foto"
            type="file"
            placeholder="сүрөт"
          />
        </div>
        <div className="post-form__input-block">
          <label htmlFor="postText">
            Посттун текстти<span>*</span>
          </label>
          <p className="post-form__descr">Окуяңыздын, сөзүңүздүн түшүндүрмөсүн жазыңыз.</p>
          <textarea
            className="post-form__textarea"
            id="postText"
            placeholder="Текст..."
            {...register('postText', {
              required: true,
            })}
          />
          <div>{errors.postText && <p>Минимум 30 символов</p>}</div>
        </div>
        <button className="post-form__sumbit-btn" type="submit">
          Жүктөө
        </button>
      </form>
    </>
  );
};
