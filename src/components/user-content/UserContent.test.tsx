import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { User } from '../../model/user';
import UserContent from './UserContent';

it('should render the UserContent compoenent without crashes', () => {
  const div = document.createElement('div');
  const user: User = {
    name: 'test',
    login: 'test',
    avatar_url: 'test',
    followers: [],
    following: 1,
    public_gists: 1,
    organizations_url: 'test',
    repositories: [],
  };
  ReactDOM.render(<UserContent user={user} />, div);
  ReactDOM.unmountComponentAtNode(div);
});