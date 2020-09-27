import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('should render the App compoenent without crashes', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});