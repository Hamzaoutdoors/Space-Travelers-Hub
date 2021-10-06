import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import JoinButton from './JoinButton';

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
    <td className="align-middle"><JoinButton status={status} id={id} /></td>
  </tr>
);

MissionEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Not a member', 'Active member']).isRequired,
};

export default MissionEntry;
