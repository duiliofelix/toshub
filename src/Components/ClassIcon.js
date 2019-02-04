import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { CLASS_ICONS } from '../assets';

const ClassIcon = ({ className, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={CLASS_ICONS[className]} />
  </TouchableOpacity>
);
ClassIcon.propTypes = {
  className: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClassIcon;
