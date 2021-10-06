import fetchRockets from '../../utils/rockets-api';

const FETCH_ROCKETS = 'spaceX/rockets/FETCH_ROCKETS';
const ADD_ROCKETS = 'spaceX/rockets/ADD_ROCKETS';
const API_SUCCESS = 'spaceX/rockets/API_SUCCESS';
const API_FAILURE = 'spaceX/rockets/API_FAILURE';
const RESERVE_ROCKET = 'spaceX/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'spaceX/rockets/CANCEL_ROCKET';

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

export const bookRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  id,
});

const rocketsReducer = (state = initialRockets, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [...state, ...action.rockets];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default rocketsReducer;
