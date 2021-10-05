import { useEffect } from 'react';
import fetchMissions from '../../utils/missions-api';

const Missions = () => {
  useEffect(() => {
    fetchMissions().then(missions => console.log(missions));
  }, []);

  return (
    <div className="missions">
      <h1>Missions Under Construction</h1>
    </div>
  );
};

export default Missions;
