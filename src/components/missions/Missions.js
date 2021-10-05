import { shallowEqual, useSelector } from 'react-redux';
import MissionsTable from './MissionsTable'
import Container from 'react-bootstrap/Container'

const Missions = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);

  return (
    <Container className="missions">
      <MissionsTable missions={missions} />
    </Container>
  );
};

export default Missions;
