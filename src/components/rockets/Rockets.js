import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <>
      <Rocket />
    </>
  );
};

export default Rockets;
