import { FC, useState, useRef, useEffect, MutableRefObject } from 'react';
import playL from '../../assets/icons/playL.svg';
import pauseL from '../../assets/icons/pauseL.svg';
import play from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';
import './audioPlayer.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface IAudio {
  audioSrc: string;
}

export const AudioPlayer: FC<IAudio> = ({ audioSrc }: IAudio) => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const progressBar: MutableRefObject<HTMLInputElement | null> = useRef(null);
  //   const animationRef = useRef<MutableRefObject<number>>(null); // Изменили тип рефа здесь
  let animationRef: number;

  useEffect(() => {
    const second = Math.floor(Number(audioPlayer.current?.duration));
    setDuration(second);
    if (progressBar.current) progressBar.current.max = String(second);
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (prevValue) {
      audioPlayer.current?.play();
      //   if (animationRef.current) animationRef.current = requestAnimationFrame(whilePlaying);
      animationRef = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current?.pause();
      //   cancelAnimationFrame(animationRef.current);
      cancelAnimationFrame(animationRef);
    }
  };

  const changePlayerCurentTime = () => {
    if (progressBar.current) {
      progressBar.current!.style.setProperty(
        '--seek-before-width',
        `${(parseFloat(progressBar.current!.value) / duration) * 100}%`
      );
      setCurrentTime(parseFloat(progressBar.current.value));
    } else {
      progressBar.current!.style.setProperty(
        '--seek-before-width',
        `${(parseFloat(progressBar.current!.value) / duration) * 100}%`
      );
      setCurrentTime(parseFloat(progressBar.current!.value));
    }
  };

  const whilePlaying = () => {
    if (progressBar.current) {
      progressBar.current.value = String(audioPlayer.current?.currentTime);
      changePlayerCurentTime();
      animationRef = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      audioPlayer.current.currentTime = parseFloat(progressBar.current.value);
      changePlayerCurentTime();
    }
  };

  const backThirty = () => {
    if (progressBar.current) {
      progressBar.current.value = String(Number(progressBar.current?.value) - 30);
      changeRange();
    }
  };

  const forwardThirty = () => {
    if (progressBar.current) {
      progressBar.current.value = String(Number(progressBar.current?.value) + 30);
      changeRange();
    }
  };

  return (
    <div className="audioPlayer">
      <audio ref={audioPlayer} src={audioSrc} controls={false} autoPlay={false} />
      <button className="forwardBackward" onClick={backThirty}>
        <svg
          fill="none"
          height="24"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0441 5.70436C21.4402 5.41246 22 5.69531 22 6.1874V17.8126C22 18.3047 21.4402 18.5875 21.0441 18.2956L13.1555 12.483C12.8301 12.2432 12.8301 11.7568 13.1555 11.517L21.0441 5.70436Z"
            stroke={themes ? '#EFFF9F' : '#0a7e89'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0441 5.70436C10.4402 5.41246 11 5.69531 11 6.1874V17.8126C11 18.3047 10.4402 18.5875 10.0441 18.2956L2.15555 12.483C1.8301 12.2432 1.8301 11.7568 2.15555 11.517L10.0441 5.70436Z"
            stroke={themes ? '#EFFF9F' : '#0a7e89'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="playPause" onClick={togglePlayPause}>
        {themes ? (
          isPlaying ? (
            <img src={play} alt="" />
          ) : (
            <img src={pause} alt="" />
          )
        ) : isPlaying ? (
          <img src={playL} alt="" />
        ) : (
          <img src={pauseL} alt="" />
        )}
      </button>
      <button className="forwardBackward" onClick={forwardThirty}>
        <svg
          enableBackground="new 0 0 64 64"
          version="1.1"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill={themes ? '#EFFF9F' : '#0a7e89'}
        >
          <path d="M10.546,48.447c-0.401,0-0.804-0.095-1.175-0.288C8.526,47.72,8,46.854,8,45.901V18.099c0-0.954,0.526-1.82,1.373-2.259    c0.848-0.439,1.859-0.37,2.636,0.178l18.48,13.012c0.801,0.793,1.242,1.848,1.241,2.971c0,1.122-0.441,2.176-1.242,2.968    l-0.125,0.105L12.009,47.983C11.571,48.291,11.06,48.447,10.546,48.447z M10.55,17.511c-0.123,0-0.223,0.041-0.276,0.069    c-0.095,0.049-0.316,0.198-0.316,0.519v27.802c0,0.321,0.221,0.471,0.316,0.52c0.095,0.049,0.346,0.143,0.607-0.041l18.281-12.856    c0.392-0.414,0.607-0.953,0.607-1.523c0.001-0.57-0.215-1.109-0.608-1.524l-18.28-12.856    C10.764,17.537,10.649,17.511,10.55,17.511z" />
          <path d="M34.816,48.447c-0.401,0-0.804-0.096-1.175-0.288c-0.846-0.44-1.371-1.305-1.371-2.259V18.099    c0-0.954,0.525-1.82,1.372-2.259c0.845-0.439,1.858-0.371,2.637,0.177L54.76,29.03c0.801,0.793,1.242,1.848,1.241,2.971    c0,1.122-0.441,2.176-1.242,2.968l-0.125,0.105L36.279,47.983C35.841,48.291,35.33,48.447,34.816,48.447z M34.821,17.511    c-0.123,0-0.223,0.041-0.276,0.069c-0.095,0.049-0.316,0.198-0.316,0.519v27.802c0,0.321,0.221,0.471,0.316,0.52    c0.096,0.049,0.348,0.143,0.607-0.041l18.281-12.856c0.392-0.414,0.607-0.953,0.607-1.523c0.001-0.57-0.215-1.109-0.608-1.524    l-18.28-12.856C35.035,17.537,34.92,17.511,34.821,17.511z" />
        </svg>
      </button>
      <div className="progressBar-block">
        <input
          className={themes ? 'progressBar progressBarColor' : 'progressBar progressBarColorL'}
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      <div className="showTime">
        <div className="curentTime">{calculateTime(currentTime)} /</div>
        <div className="duration">{duration && !isNaN(duration) && calculateTime(duration)}</div>
      </div>
    </div>
  );
};
