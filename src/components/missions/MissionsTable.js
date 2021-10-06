import Table from 'react-bootstrap/Table';
import { shallowEqual, useSelector } from 'react-redux';
import MissionEntry from './MissionEntry';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);

  return (
    <Table striped bordered hover size="sm" responsive>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({
          id, name, description, status,
        }) => (
          <MissionEntry
            key={id}
            id={id}
            name={name}
            description={description}
            status={status}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsTable;
