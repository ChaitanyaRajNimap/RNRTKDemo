import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {CakeView} from './src/features/cake/CakeView';
// import {IceCreamView} from './src/features/iceCream/IceCreamView';
// import {UserView} from './src/features/user';
import CakeView from './src/features/cake/CakeView';
import IceCreamView from './src/features/iceCream/IceCreamView';
import UserView from './src/features/user/UserView';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <CakeView />
      <IceCreamView />
      <UserView />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
