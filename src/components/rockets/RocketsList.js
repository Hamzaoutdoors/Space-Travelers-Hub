import React from 'react';
import { Container } from 'react-bootstrap';
import { shallowEqual, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Rocket from './Rocket';

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets, shallowEqual);

  const rocketsList = rockets.map((rocket) => {
    const {
      id, name, description, flickrImage, reserved,
    } = rocket;

    return (
      <Rocket
        name={name}
        description={description}
        flickrImage={flickrImage}
        key={id}
        id={id}
        reserved={reserved}
      />
    );
  });

  return (
    <>
      <Container>
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
        >
          {rocketsList}
        </motion.div>
      </Container>
    </>
  );
};

export default Rockets;
