import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './logoStyle.module.scss';

const logoContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const textAnimation = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Logo = (props) => {
  const { string } = props;
  const messageArray = string.split('');

  const animateLogo = () => messageArray.map((char, index) => (
    <motion.div
      variants={textAnimation}
      key={char.concat(index)}
    >
      {char}
    </motion.div>
  ));
  return (
    <motion.div
      variants={logoContainer}
      initial="initial"
      animate="animate"
      className={styles.textContainer}
    >
      {animateLogo()}
    </motion.div>
  );
};

export default Logo;

Logo.propTypes = {
  string: PropTypes.string.isRequired,
};
