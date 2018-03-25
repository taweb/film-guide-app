import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const NavIconButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default NavIconButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 10
  }
});