import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Repositories } from '../../model/repositories';
import RepositoryContent from './RepositoryContent';

it('should render the RepositoryContent compoenent without crashes', () => {
  const div = document.createElement('div');
  const repository: Repositories = {
      forks: 0,
      language: 'test',
      name: 'test',
      url: 'test'
  };
  ReactDOM.render(<RepositoryContent repository={repository} />, div);
  ReactDOM.unmountComponentAtNode(div);
});