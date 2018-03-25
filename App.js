import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './store';

import ListScreen from './containers/ListScreen.js';
import DetailScreen from './screens/DetailScreen.js';

const App = () => ( 
	<Provider store={store}>
		<RootNavigator />
	</Provider>
);

export default App;

StatusBar.setBarStyle('light-content');

const RootNavigator = StackNavigator({
  List: ListScreen,
  Detail: DetailScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#68aa63'
    },
    headerTintColor: '#fff'
  }
});

