import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import JoinButton from './JoinButton';

const StatusBadge = ({ status }) => (
  <Badge
    className={`mx-2 ${status === 'Not a member' && 'text-uppercase'}`}
    bg={status === 'Not a member' ? 'secondary' : 'primary'}
  >
    {status}
  </Badge>
);

StatusBadge.propTypes = {
  status: PropTypes.oneOf(['Not a member', 'Active member']).isRequired,
};

const MissionEntry = ({
  id, name, description, status,
}) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{description}</td>
    <td className="align-middle"><StatusBadge status={status} /></td>
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
