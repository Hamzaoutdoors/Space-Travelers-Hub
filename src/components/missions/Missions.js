import { shallowEqual, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import MissionsTable from './MissionsTable';

const Missions = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);

  return (
    <Container className="missions">
      <MissionsTable missions={missions} />
    </Container>
  );
};

export default Missions;
