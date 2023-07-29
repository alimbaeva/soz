import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { randomNumber } from '../../utils/randomNumber';
import useModal from '../modalWindow/useModal';

import { Inputs } from '../../types/TypesComponents';
import { ModalWindow } from '../modalWindow/ModalWindow';

import collective_group_help from '../../assets/icons/collective_group_help.svg';
import call_center from '../../assets/icons/call_center.svg';
import { SetHelp } from '../../store/helperFormReducer';
import { RootState, store } from '../../store';
import { useSelector } from 'react-redux';

import './helperButton.scss';

const images = [collective_group_help, call_center];

export const HelperButton = () => {
  const { sacsess } = useSelector((state: RootState) => state.HelpFormReducer);
  const [image, setImage] = useState(0);
  // const dispatch = useDispatch();
  const { modalActive, setActive } = useModal();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const num = randomNumber(images.length);
      setImage(num - 1);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    // dispatch(setShow(true));
    setActive();
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    store.dispatch(SetHelp({ title: data.title, text: data.text, phone: data.phone }));
    setActive();
  };

  return (
    <>
      <ModalWindow active={modalActive} setActive={setActive}>
        <form className="help-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="help-form__input">
            <label htmlFor="text">
              Темаңыз<span>*</span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Теманыз"
              {...register('title', { required: 'Поле обязательно для заполнения' })}
            />
          </div>
          {errors.title?.type === 'required' && <p role="alert">*Сураныч, темаңызды жазыныз</p>}
          <div className="help-form__input">
            <label htmlFor="text">
              Телефон<span>*</span>
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Kолдонуучунун аты"
              {...register('phone', { required: 'Поле обязательно для заполнения' })}
            />
          </div>
          {errors.phone?.type === 'required' && <p role="alert">*Сураныч, телефонуңузду жазыңыз</p>}
          <div className="help-form__input">
            <label htmlFor="text">
              Кат жазыңыз<span>*</span>
            </label>
            <textarea
              className="help-form__textarea"
              id="text"
              placeholder="Текст..."
              {...register('text', {
                required: true,
              })}
            />
            <div>{errors.text && <p>{errors?.text.message || 'Error!'}</p>}</div>
          </div>
          <button className="help-form__button">Жөнөтүү</button>
        </form>
      </ModalWindow>
      <button className="helper-button" onClick={handleClick}>
        <img src={images[image]} alt="" />
      </button>
    </>
  );
};
