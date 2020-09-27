import React from "react";
import { useSelector } from "react-redux";
import { GITHUB_STATE } from "../../model/store-state";
import UserContent from "../user-content/UserContent";
import loadingGif from '../../images/loading.webp'
import errorGif from '../../images/error.gif'
import searchGif from '../../images/search.webp';

import './UserInfo.css';

const UserInfo: React.FC = () => {

  const user = useSelector((state: GITHUB_STATE) => state.user);
  const loading = useSelector((state: GITHUB_STATE) => state.loading);
  const error = useSelector((state: GITHUB_STATE) => state.error);

  if (loading) {
    return <div className="center-logo">
      <img className="gif" src={loadingGif} alt="loading..." />
    </div>;
  }

  if (error) {
    return <div className="center-logo">
      <img className="gif" src={errorGif} alt="error" />
      <h2>Oops! An error has occurred! Please try again or contact our support.</h2>
    </div>;
  }

  if (user) {
    return (
      <UserContent user={user} />
    );
  }

  return <div className="center-logo">
  <img className="gif" src={searchGif} alt="search" />
  <h2>Welcome to GitHub searcher. Who do you want to search for today?</h2>
</div>;
};

export default UserInfo;