import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const joinMessage = (status) => {
  if (status === 'Not a member') {
    return (
      <Button
        className="text-nowrap mx-3"
        variant="outline-secondary"
      >
        Join Mission
      </Button>
    );
  }

  return (
    <Button
      className="text-nowrap mx-3"
      variant="outline-danger"
    >
      Leave Mission
    </Button>
  );
};

const statusBadge = (status) => {
  const bg = status === 'Not a member' ? 'secondary' : 'primary';
  const classes = status === 'Not a member' ? 'mx-2 text-uppercase' : 'mx-2';
  return <Badge className={classes} bg={bg}>{status}</Badge>;
};

const MissionEntry = ({
  id, name, description, status,
}) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{description}</td>
    <td className="align-middle">{statusBadge(status)}</td>
    <td className="align-middle">{joinMessage(status)}</td>
  </tr>
);

MissionEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MissionEntry;
