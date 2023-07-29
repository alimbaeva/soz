import collective_group_help from '../../assets/icons/collective_group_help.svg';
import call_center from '../../assets/icons/call_center.svg';

import './helperButton.scss';
import { useEffect, useState } from 'react';
import { randomNumber } from '../../utils/randomNumber';
import { useDispatch } from 'react-redux';
import { store } from '../../store';
import { setShow } from '../../store/helperFormReducer';
import useModal from '../modalWindow/useModal';

const images = [collective_group_help, call_center];

export const HelperButton = () => {
  const [image, setImage] = useState(0);
  const dispatch = useDispatch();
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
    dispatch(setShow(true));
    setActive();
  };

  return (
    <button className="helper-button" onClick={handleClick}>
      <img src={images[image]} alt="" />
    </button>
  );
};
