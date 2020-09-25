import React from 'react';
import { Provider } from 'react-redux';

import Profile from '../profile/Profile';
import Header from './header/Header';
import store from "../../store/store";

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Profile />
      </ Provider>
    </>
  );
}

export default App;
