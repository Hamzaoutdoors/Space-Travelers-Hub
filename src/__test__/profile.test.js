import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyRocket from '../components/profile/MyRockets';
import store from '../redux/configureStore';

test('rockets list renders properly', () => {
  const tree = renderer
    .create(<Provider store={store}><MyRocket /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
