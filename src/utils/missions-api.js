import axios from 'axios';

const config = {
  method: 'get',
  url: 'https://api.spacexdata.com/v3/missions',
};

const fetchMissions = async () => {
  const response = await axios(config);
  return response.data.map(({ mission_id, mission_name, description }) => ({
    id: mission_id,
    name: mission_name,
    description,
    status: 'Not a member',
  }));
};

export default fetchMissions;
