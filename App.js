import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import HorizontalFlatList from './HorizontalFlatList';

const AppNavigator = createStackNavigator(
  {
    Home: HorizontalFlatList,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
