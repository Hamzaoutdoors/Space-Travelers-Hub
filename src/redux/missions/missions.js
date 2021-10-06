import fetchMissions from '../../utils/missions-api';

const FETCH_MISSIONS = 'spaceX/missions/FETCH_MISSIONS';
const ADD_MISSIONS = 'spaceX/missions/ADD_MISSIONS';
const API_SUCCESS = 'spaceX/missions/API_SUCCESS';
const API_FAILURE = 'spaceX/missions/API_FAILURE';
const JOIN_MISSION = 'spaceX/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceX/missions/LEAVE_MISSION';

const initialMissions = [];

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

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
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === action.id) {
          return {
            ...mission,
            status: 'Active member',
          };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id === action.id) {
          return {
            ...mission,
            status: 'Not a member',
          };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionsReducer;
