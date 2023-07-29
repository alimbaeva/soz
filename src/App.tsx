import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './pages/main/Main';
import { TrueStory } from './pages/trueStory/TrueStory';
import { Misogyny } from './pages/misogyny/Misogyny';
import { PostPublish } from './pages/postPublish/PostPublish';
import { Podcast } from './pages/podcast/Podcast';
import { TrueStoryExtended } from './pages/trueStoryExtended/TrueStoryExtended';
import { Auth } from './pages/auth/Auth';
import { Question } from './pages/question/Question';

import { useSelector } from 'react-redux';
import { RootState } from './store';

import './index.scss';
import { HelperButton } from './components/helperButton/HelperButton';

export const App: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  useEffect(() => {
    document.body.style.backgroundColor = themes ? '#000' : '#FFF';
    document.body.style.color = themes ? '#FFF' : '#000';
  }, [themes]);

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/trueStory" element={<TrueStory />} />
          <Route path="/misogyny" element={<Misogyny />} />
          <Route path="/postPublish" element={<PostPublish />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/trueStory/:id" element={<TrueStoryExtended />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </div>
      <Footer />
      <HelperButton />
    </Router>
  );
};
