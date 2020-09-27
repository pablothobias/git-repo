import React from 'react';
import { User } from '../../model/user';
import FollowerContent from '../follower-content/FollowerContent';
import RepositoryContent from '../repository-content/RepositoryContent';
import defaultAvatar from '../../images/default-avatar.jpg';

import './UserContent.css';

const UserContent: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="table-content">
      <table>
        <caption>Github User</caption>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">NAME</th>
            <th scope="col">LOGIN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img id="avatar-url" src={user.avatar_url ? user.avatar_url : defaultAvatar} alt="avatar_url" />
            </td>
            <td>{user.name}</td>
            <td>{user.login}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th scope="col">ORGANIZATION</th>
            <th scope="col">GISTS</th>
            <th scope="col">FOLLOWING</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <a href={user.organizations_url}>{user.organizations_url}</a> </td>
            <td>{user.public_gists}</td>
            <td>{user.following}</td>
          </tr>
        </tbody>
      </table>
      <table>
      </table>
      <table>
        <thead>
          <tr>
            <th className="followers-content" scope="col">FOLLOWERS</th>
            <th scope="col">REPOSITORIES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="followers-content">{user.followers.map(follower => {
              return <FollowerContent key={follower.email} follower={follower} />
            })}</td>
            <td>{user.repositories.map(repo => {
              return <RepositoryContent key={repo.url} repository={repo} />
            })}</td>
          </tr>
        </tbody>
      </table>
      <table>

      </table>
    </div>
  );
}

export default UserContent;

