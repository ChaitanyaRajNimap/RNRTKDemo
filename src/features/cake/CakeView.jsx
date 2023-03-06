import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CakeView = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Number of cakes -</Text>
      <Button title="Order cake" onPress={() => {}} style={styles.btn} />
      <Button title="Restock cakes" onPress={() => {}} style={styles.btn} />
    </View>
  );
};

export default CakeView;

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
