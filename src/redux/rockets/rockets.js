import fetchRockets from '../../utils/rockets-api';

const FETCH_ROCKETS = 'spaceX/rockets/FETCH_ROCKETS';
const ADD_ROCKETS = 'spaceX/rockets/ADD_ROCKETS';
const API_SUCCESS = 'spaceX/rockets/API_SUCCESS';
const API_FAILURE = 'spaceX/rockets/API_FAILURE';
const RESERVE_ROCKET = 'spaceX/rockets/RESERVE_ROCKET';

const initialRockets = [];

export const fetchRocketsAction = () => (dispatch) => {
  dispatch({ type: FETCH_ROCKETS });
  return fetchRockets().then(
    (rockets) => {
      dispatch({ type: API_SUCCESS });
      dispatch({ type: ADD_ROCKETS, rockets });
    },
    (error) => {
      dispatch({ type: API_FAILURE, error });
    },
  );
};

export const bookRocket = (currentState, id) => (dispatch) => {
  const newState = currentState.map((rocket) => {
    if (rocket.id !== id) return rocket;
    return { ...rocket, reserved: true };
  });
  dispatch({
    type: RESERVE_ROCKET,
    newState,
  });
};

const rocketsReducer = (state = initialRockets, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [...state, ...action.rockets];
    case RESERVE_ROCKET:
      return action.newState;
    default:
      return state;
  }
};

export default rocketsReducer;
