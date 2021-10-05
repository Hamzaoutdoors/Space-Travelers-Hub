import axios from 'axios';

const config = {
  method: 'get',
  url: 'https://api.spacexdata.com/v3/rockets',
};

const fetchRockets = async () => {
  const res = await axios(config);
  // Non camelCase are needed here since they're used by the rockets API.
  /* eslint-disable camelcase */
  return res.data.map(({
    rocket_id, rocket_name, description, flickr_images,
  }) => ({
    id: rocket_id,
    name: rocket_name,
    description,
    flickrImage: flickr_images[0],
  }));
  /* eslint-enable camelcase */
};

export default fetchRockets;
