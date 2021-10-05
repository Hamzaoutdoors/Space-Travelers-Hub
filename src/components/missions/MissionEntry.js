import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const joinMessage = (status) => {
  if (status === 'Not a member')
    return <Button variant="outline-secondary">Join Mission</Button>;
  if (status === 'Active member')
    return <Button variant="outline-danger">Danger</Button>;
}

const MissionEntry = ({ name, description, status }) => {
  return (
    <tr >
      <td>{name}</td>
      <td>{description}</td>
      <td className="align-items-center">{status}</td>
      <td className="align-items-center">{joinMessage(status)}</td>
    </tr>
  );
};

MissionEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MissionEntry;
