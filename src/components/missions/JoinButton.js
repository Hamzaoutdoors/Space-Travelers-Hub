import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import style from './missions.module.scss';

const JoinButton = ({ status, id }) => {
  const dispatch = useDispatch();
  const fields = {
    'Not a member': {
      variant: 'outline-secondary',
      message: 'Join Mission',
      click: () => { dispatch(joinMission(id)); },
    },
    'Active member': {
      variant: 'outline-danger',
      message: 'Leave Mission',
      click: () => { dispatch(leaveMission(id)); },
    },
  };

  return (
    <Button
      className={`text-nowrap mx-3 ${style.buttonStyle}`}
      variant={fields[status].variant}
      onClick={fields[status].click}
    >
      {fields[status].message}
    </Button>
  );
};

JoinButton.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Not a member', 'Active member']).isRequired,
};

export default JoinButton;
