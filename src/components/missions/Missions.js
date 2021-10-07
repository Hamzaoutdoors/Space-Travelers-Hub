import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import MissionsTable from './MissionsTable';
import { fetchMissionsAction } from '../../redux/missions/missions';

let initialized = false;

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return;
    dispatch(fetchMissionsAction());
    initialized = true;
  }, []);

  return (
    <Container className="missions">
      <MissionsTable />
    </Container>
  );
};

export default Missions;
