import React, { FC, lazy } from 'react';
import ReactPlayer from 'react-player';
import video1 from '../../assets/video/video1.mp4';
import fone1 from '../../assets/images/fone1.png';
import fone2 from '../../assets/images/fone2.png';
import fone3 from '../../assets/images/fone3.png';
import fone4 from '../../assets/images/fone4.png';
import { randomNumber } from '../../utils/randomNumber';

interface IVideo {
  idVideo: string;
}

const i = [fone1, fone2, fone3, fone4];

export const RenderYoutube: FC<IVideo> = ({ idVideo }: IVideo) => {
  const num = randomNumber(i.length - 1);
  return <ReactPlayer url={video1} controls={true} width="100%" height="100%" light={i[num]} />;
};
