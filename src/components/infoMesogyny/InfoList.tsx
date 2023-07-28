import { FC } from 'react';
import { Link } from 'react-router-dom';

import { InfoData } from '../../types/TypesComponents';

import './infoList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  listItems: InfoData[];
}

export const InfoList: FC<Props> = ({ listItems }) => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <ul className="info-list">
      {listItems.map((item, index) => (
        <li key={index} className="info-list__item">
          <Link to={item.link} target="_blank">
            <p className="info-list__item-text" style={{ color: `${themes ? '#FFF' : '#000'}` }}>
              {item.title}
            </p>
            <svg
              className="arrow-icon"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.5931 9.49754L39.8896 22.7941M39.8896 22.7941L26.5931 36.0907M39.8896 22.7941L5.69849 22.7941"
                stroke={themes ? '#FFF' : '#000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
};
