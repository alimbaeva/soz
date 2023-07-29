import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../types/TypesComponents';

import './helpForm.scss';

export const HelpForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="help-form">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label htmlFor="text">
            Теманыз<span>*</span>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Теманыз"
            {...register('title', { required: 'Поле обязательно для заполнения' })}
          />
        </div>
        {errors.title?.type === 'required' && <p role="alert">*Сураныч, темаңызды жазыныз</p>}
        <div className="">
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
        <div className="">
          <label htmlFor="text">
            Кат жазыңыз<span>*</span>
          </label>
          <textarea
            className=""
            id="text"
            placeholder="Текст..."
            {...register('text', {
              required: true,
            })}
          />
          <div>{errors.text && <p>{errors?.text.message || 'Error!'}</p>}</div>
        </div>
        <button>Жонотуу</button>
      </form>
    </div>
  );
};
