import collective_group_help from '../../assets/icons/collective_group_help.svg';
import call_center from '../../assets/icons/call_center.svg';

import './helperButton.scss';
import { useEffect, useState } from 'react';
import { randomNumber } from '../../utils/randomNumber';

const images = [collective_group_help, call_center];

export const HelperButton = () => {
  const [image, setImage] = useState(0);

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
    return;
  };

  return (
    <button className="helper-button" onClick={handleClick}>
      <img src={images[image]} alt="" />
    </button>
  );
};
