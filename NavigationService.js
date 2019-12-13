import {
  NavigationActions,
  SwitchActions,
  TabActions,
  crea
} from "react-navigation";
import { BottomNavigation } from "react-native-paper";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function setTopLevelJumper(jumperRef) {
  _jumper = jumperRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function getCurrentRoute() {
  return _navigator.state.routeName;
}

function jumpTo(routeName, params) {
  _jumpe;
}

export default {
  jumpTo,
  navigate,
  setTopLevelNavigator,
  setTopLevelJumper,
  getCurrentRoute
};
