import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

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
