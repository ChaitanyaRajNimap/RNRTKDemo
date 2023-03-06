import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const IceCreamView = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Number of icecreams -</Text>
      <Button title="Order icecream" onPress={() => {}} style={styles.btn} />
      <Button title="Restock icecreams" onPress={() => {}} style={styles.btn} />
    </View>
  );
};

export default IceCreamView;

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
  btn: {marginBottom: 10},
});
