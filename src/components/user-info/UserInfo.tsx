import React from "react";
import { useSelector } from "react-redux";
import { Repositories } from "../../model/repositories";
import { GITHUB_STATE } from "../../model/store-state";

const UserInfo: React.FC = () => {

  const user = useSelector((state: GITHUB_STATE) => state.user);
  const loading = useSelector((state: GITHUB_STATE) => state.loading);
  const error = useSelector((state: GITHUB_STATE) => state.error);

  if(loading) {
    return <p>Loading...</p>;
  }

  if(error) {
    return <p>Error</p>;
  }

  if (user) {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Avatar</th>
            <th>Location</th>
            <th>Bio</th>
            <th>Repositories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user && user.name}</td>
            <td>
              {user && !user.avatar_url ? (
                " "
              ) : (
                  <img
                    className="ui small circular image"
                    src={user ? user.avatar_url : ''}
                    alt={user ? user.avatar_url : ''}
                  />
                )}
            </td>
            <td>{user && user.name}</td>
            <td>{user && user.name}</td>
            <td>
              {user && user.repositories.map((repo: Repositories) => (
                <div className="ui relaxed divided list" key={repo.name}>
                  <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                      <a href={repo.url} className="header">
                        {repo.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return <p>Search User!</p>
};

export default UserInfo;