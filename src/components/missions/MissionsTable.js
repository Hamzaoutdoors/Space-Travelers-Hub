import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types';
import MissionEntry from './MissionEntry';

const MissionsTable = ({ missions }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {missions.map(({ id, name, description, status }) =>
        <MissionEntry
          key={id}
          id={id}
          name={name}
          description={description}
          status={status}
        />)}
      </tbody>
    </Table>
  );
};

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MissionsTable;
