import { useEffect, useState } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const useModal = () => {
  const { createPost, commentsCreate } = useSelector((state: RootState) => state.ContentReducer);
  const [modalActive, setisOpen] = useState(false);
  const setActive = () => {
    setisOpen(!modalActive);
  };

  // useEffect(() => {
  //   if (!createPost) setisOpen(false);
  // }, [createPost]);
  // useEffect(() => {
  //   if (!commentsCreate) setisOpen(false);
  // }, [commentsCreate]);

  return {
    modalActive,
    setActive,
  };
};

export default useModal;
