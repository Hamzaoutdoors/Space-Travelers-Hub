import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/rockets/Rocket';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Rocket
        name="rocket test"
        description="this is a test"
        flickrImage="testImage"
        key="testKey"
        id="testId"
        reserved
      />
    </Provider>,
  );
});
afterEach(cleanup);

describe('rockets cards testing', () => {
  test('reserve badge', () => {
    screen.getByText('rocket test');
    expect(screen.getByText('Reserved')).toBeInTheDocument();
  });

  test('reserve Button', () => {
    screen.getByText('rocket test');
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });
});
