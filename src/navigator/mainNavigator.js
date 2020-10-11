import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn56138002Navigator from '../features/SignIn56138002/navigator';
import SignIn57138001Navigator from '../features/SignIn57138001/navigator';
import SignIn58138000Navigator from '../features/SignIn58138000/navigator';
import SignIn59137999Navigator from '../features/SignIn59137999/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn56138002: { screen: SignIn56138002Navigator },
SignIn57138001: { screen: SignIn57138001Navigator },
SignIn58138000: { screen: SignIn58138000Navigator },
SignIn59137999: { screen: SignIn59137999Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
