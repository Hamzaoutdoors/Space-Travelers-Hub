import fetchMissions from '../../utils/missions-api';

const FETCH_MISSIONS = 'spaceX/missions/FETCH_MISSIONS';
const ADD_MISSIONS = 'spaceX/missions/ADD_MISSIONS';
const API_SUCCESS = 'spaceX/missions/API_SUCCESS';
const API_FAILURE = 'spaceX/missions/API_FAILURE';

const initialMissions = [];

export const fetchMissionsAction = () => (dispatch) => {
  dispatch({ type: FETCH_MISSIONS });
  return fetchMissions().then(
    (missions) => {
      dispatch({ type: API_SUCCESS });
      dispatch({ type: ADD_MISSIONS, missions });
    },
    (error) => {
      dispatch({ type: API_FAILURE, error });
    },
  );
};

const missionsReducer = (state = initialMissions, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return [...state, ...action.missions];
    default:
      return state;
  }
};

export default missionsReducer;
