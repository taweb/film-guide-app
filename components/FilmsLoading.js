import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const FilmsLoading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

export default FilmsLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});