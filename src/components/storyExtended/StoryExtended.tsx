import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Analysis } from '../../components/UI-kit/analysis/Analysis';
import './storyExtended.scss';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

type FormValues = {
  description: string;
};

export const StoryExtended = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);
  const { post } = useSelector((state: RootState) => state.ContentReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    console.log(post);
  }, [post]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data); // Access form data when submitted
  };

  return (
    <div>
      <div className="story__blok">
        <h3>“{post.title}”</h3>
        <div className="story__user-info">
          <div className="user-image">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 36 32"
              enableBackground="new 0 0 36 32"
              xmlSpace="preserve"
              width="48px"
            >
              <path
                fill="#828282"
                d="M22.22,20.726c-0.157-0.024-0.317,0.038-0.425,0.155c-0.109,0.116-0.156,0.278-0.126,0.435
              c0.276,1.45,1.205,3.44,4.057,4.679c0.338,0.146,0.86,0.26,1.522,0.403c2.478,0.536,6.622,1.434,7.64,5.232
              C34.948,31.853,35.15,32,35.371,32c0.043,0,0.086-0.006,0.13-0.017c0.267-0.072,0.425-0.346,0.354-0.613
              c-1.177-4.387-5.872-5.404-8.395-5.95c-0.584-0.127-1.089-0.236-1.336-0.344c-1.714-0.744-2.821-1.848-3.301-3.286
              c4.762,0.354,6.918-1.543,7.013-1.629c0.118-0.107,0.179-0.266,0.161-0.425s-0.11-0.3-0.249-0.38C27,17.786,27,12.361,27,10.318
              c0-5.713-3.848-10.242-8.781-10.313c-0.014-0.001-0.121-0.003-0.141-0.003c0,0,0,0-0.001,0C13.072,0.03,9,4.564,9,10.11
              c0,2.043,0,7.469-2.748,9.038c-0.145,0.083-0.238,0.232-0.251,0.398c-0.012,0.166,0.06,0.328,0.191,0.431
              c0.138,0.107,3.188,2.441,6.941,1.732c-0.502,1.378-1.594,2.438-3.258,3.161c-0.241,0.105-0.721,0.22-1.277,0.352
              c-2.54,0.604-7.269,1.729-8.453,6.147c-0.071,0.268,0.087,0.541,0.354,0.613c0.271,0.067,0.541-0.088,0.613-0.354
              c1.029-3.844,5.217-4.839,7.718-5.435c0.627-0.149,1.122-0.267,1.444-0.406c2.852-1.239,3.78-3.229,4.057-4.679
              c0.033-0.173-0.027-0.351-0.159-0.467c-0.131-0.117-0.312-0.157-0.482-0.104c-2.707,0.852-5.208-0.32-6.301-0.97
              C10,17.381,10,12.35,10,10.11c0-4.997,3.626-9.083,8.12-9.11c0.005,0,0.102,0.006,0.106,0.006C22.658,1.069,26,5.072,26,10.318
              c0,2.241,0,7.283,2.622,9.469C27.719,20.303,25.66,21.138,22.22,20.726z"
              />
            </svg>
          </div>
          <div>
            <p className="user-name">{post.author.username} 2 </p>
            <div className="story-text-block">
              <p className="story-date">27.07.2023 </p>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213Z"
                    stroke="#676767"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.45801 12C3.73201 7.943 7.52301 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.52301 19 3.73201 16.057 2.45801 12Z"
                    stroke="#676767"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                15
              </span>
            </div>
          </div>
        </div>

        <p className="story">{post.text}</p>
      </div>
      <Analysis id={post.id} like={post.likes} dislike={0} countComments={0} />
      <div className="comments__block">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="description">Сын-пикир калтыруу:</label>
          <textarea
            id="description"
            placeholder="Сын-пикир калтыр..."
            {...register('description', { required: 'Description is required.' })}
          />
          {errors.description && <p>{errors.description.message}</p>}
          <button type="submit" className={themes ? 'btn_Bl_border' : 'btn_Li_border'}>
            Жүктөө
          </button>
        </form>
        <ul>
          <li>
            <div className="guest-image">
              <p>AS</p>
              {/* <img src="" alt="" /> */}
            </div>
            <div className="guest-info">
              <div className="guest-name">
                <p>Asel</p>
                <span>40 мүнөт мурун</span>
              </div>
              <p className="text">Тилекке каршы коомчулукта эң көп кездешкен окуялар</p>
              <div className="analis">
                <button>Жооп беруу</button>
                <Analysis id={post.id} like={post.likes} dislike={0} countComments={0} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
