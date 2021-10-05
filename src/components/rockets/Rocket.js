import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import style from './rocket.module.scss';

const Rocket = ({
  name, description, flickrImage,
}) => (
  <>
    <Card className={style.cardStyle}>
      <Card.Img
        variant="left"
        src={flickrImage}
        className={style.rocketImage}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Reserve Rocket</Button>
      </Card.Body>
    </Card>
  </>
);

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
};
