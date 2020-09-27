import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Followers } from '../../model/followers';
import FollowerContent from './FollowerContent';

it('should render the FollowerContent compoenent without crashes', () => {
  const div = document.createElement('div');
  const follower: Followers = {
    avatar_url: 'test',
    name: 'test',
    email: 'test',
  };
  ReactDOM.render(<FollowerContent follower={follower} />, div);
  ReactDOM.unmountComponentAtNode(div);
});