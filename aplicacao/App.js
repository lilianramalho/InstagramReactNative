
import React , {Fragment , useState , useEffect} from 'react';

import { Login } from "./src/Views/Login";
import { Feed } from "./src/Views/Feed";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator({
  Login : {screen : Login},
  Feed : {screen : Feed}

});

const AppContainer = createAppContainer(navigator);

const App: () => React$Node = () => {
  return (
    <AppContainer/>

  );
};


export default App;
