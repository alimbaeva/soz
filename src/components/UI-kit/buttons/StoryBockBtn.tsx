import { FC } from 'react';
import starYello from '../../../assets/icons/starYello.svg';
import starBlue from '../../../assets/icons/starBlue.svg';
import circle from '../../../assets/icons/circle.svg';
import msg2 from '../../../assets/icons/msg2.svg';
import './storyBockBtn.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Link } from 'react-router-dom';

export const StoryBockBtn: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <div className="set__story">
      <div className="button">
        <Link to="/postPublish">
          <button className={themes ? 'btn_Bl_border' : 'btn_Li_border'}>Жаңы окуя кош</button>
        </Link>
      </div>
      <img className="starYello" src={starYello} alt="" />
      <img className="starBlue" src={starBlue} alt="" />
      <span className="setLine">
        <svg
          width="80"
          height="101"
          viewBox="0 0 80 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector 5"
            d="M71.5001 1C74.0001 34 89.3377 58.6699 65.5001 77C53.6741 86.0937 1.00006 100.5 1.00006 100.5"
            stroke={themes ? '#FFF' : '#000'}
            strokeDasharray="2 2"
          />
        </svg>
      </span>
      <img className="circle" src={circle} alt="" />
      <img className="msg2" src={msg2} alt="" />
    </div>
  );
};
