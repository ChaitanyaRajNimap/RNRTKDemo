import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserView = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>List of users -</Text>
    </View>
  );
};

export default UserView;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
