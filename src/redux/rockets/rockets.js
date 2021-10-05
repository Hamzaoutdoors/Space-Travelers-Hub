import axios from 'axios';

const GET_ROCKETS = 'spaceX/rockets/GET_ROCKETS';

const initialRockets = [];

export const getRockets = () => async (dispatch) => {
  const res = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await res.data;
  if (data) {
    const rockets = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickrImage: rocket.flickr_images[0],

    }));
    dispatch({
      type: GET_ROCKETS,
      rockets,
    });
  }
};

const rocketsReducer = (state = initialRockets, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.rockets];

    default:
      return state;
  }
};

export default rocketsReducer;
