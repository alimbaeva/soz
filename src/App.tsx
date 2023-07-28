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

import { useSelector } from 'react-redux';
import { RootState } from './store';

import './index.scss';

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
          <Route path="/trueStoryID" element={<TrueStoryExtended />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
