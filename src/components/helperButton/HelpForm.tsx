import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../types/TypesComponents';
import { ModalWindow } from '../modalWindow/ModalWindow';
import useModal from '../modalWindow/useModal';

import './helpForm.scss';

export const HelpForm: FC = () => {
  const { modalActive, setActive } = useModal();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
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
  );
};
