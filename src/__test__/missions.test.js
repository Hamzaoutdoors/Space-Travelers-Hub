import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { within } from '@testing-library/dom'
import MissionsTable from '../components/missions/MissionsTable';
import store from '../redux/configureStore';
import { fetchMissionsAction } from '../redux/missions/missions';

jest.mock('../utils/missions-api');

describe('Missions tests', () => {
  it('Missions page matches snapshot', async () => {
    await store.dispatch(fetchMissionsAction());
    const missionsPage = renderer
      .create(<Provider store={store}><MissionsTable /></Provider>)
      .toJSON();
    expect(missionsPage).toMatchSnapshot();
  });

  describe('Interaction tests', () => {
    beforeEach(() => {
      render(<Provider store={store}><MissionsTable /></Provider>)
    });
    afterEach(cleanup);

    it('Changes button after clicking button', () => {
      const thaicomRow = screen.getByText('Thaicom').closest('tr');

      expect(within(thaicomRow).queryByText('Leave Mission')).not
        .toBeInTheDocument();
      const joinButton = within(thaicomRow).getByText('Join Mission');
      fireEvent.click(joinButton);
      expect(within(thaicomRow).queryByText('Leave Mission'))
        .toBeInTheDocument();
      fireEvent.click(joinButton);
      expect(within(thaicomRow).queryByText('Leave Mission')).not
        .toBeInTheDocument();
    });

    it('Changes badge after clicking button', () => {
      const telstarRow = screen.getByText('Telstar').closest('tr');

      expect(within(telstarRow).queryByText('Active member')).not
        .toBeInTheDocument();
      const joinButton = within(telstarRow).getByText('Join Mission');
      fireEvent.click(joinButton);
      expect(within(telstarRow).queryByText('Active member'))
        .toBeInTheDocument();
      fireEvent.click(joinButton);
      expect(within(telstarRow).queryByText('Active member')).not
        .toBeInTheDocument();
    });
  });
});
