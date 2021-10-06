import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import style from './rocket.module.scss';
import { bookRocket } from '../../redux/rockets/rockets';

const Rocket = ({
  name, description, flickrImage, id, reserved,
}) => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  const bookRocketHandler = () => {
    dispatch(bookRocket(rockets, id));
  };

  return (
    <>
      <Card className={style.cardStyle}>
        <Card.Img
          variant="left"
          src={flickrImage}
          className={style.rocketImage}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {reserved ? <Badge pill bg="success" className="mx-2 px-2 py-1">Reserved</Badge> : null}
            {description}
          </Card.Text>
          <Button variant="primary" onClick={bookRocketHandler}>Reserve Rocket</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
