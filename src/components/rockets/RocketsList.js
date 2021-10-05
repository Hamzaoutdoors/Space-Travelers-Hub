import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const rocketsList = rockets.map((rocket) => {
    const {
      id, name, description, flickrImage,
    } = rocket;
    return (
      <Rocket
        name={name}
        description={description}
        flickrImage={flickrImage}
        key={id}
      />
    );
  });
  return (
    <>
      <Container>
        {rocketsList}
      </Container>
    </>
  );
};

export default Rockets;
