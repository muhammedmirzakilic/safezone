import { NavigationActions } from "react-navigation";

//summary
export function navigate(routeName, params = {}) {
  return (dispatch, getState) => {
    if (routeName !== "BACK") {
      dispatch(
        NavigationActions.navigate({
          routeName,
          params
        })
      );
    } else {
      var nav = getState().get("Navigation");
      if (nav.routes.length === 1 && currentRouteName(nav) === "HomeEntry") {
        return false;
      } else {
        if (params.targetName) {
          var key = getKeyWithRouteName(nav, params.targetName);
          dispatch(
            NavigationActions.back({
              key
            })
          );
        } else {
          dispatch(NavigationActions.back());
        }
        return true;
      }
    }
  };
}

function getKeyWithRouteName(nav, target) {
  if (nav.routeName === target) {
    return nav.key;
  }
  var key = undefined;
  if (nav.routes) {
    for (var i = 0; i < nav.routes.length; i++) {
      key = getKeyWithRouteName(nav.routes[i], target);
      if (key) return key;
    }
  }
}

export function currentRouteName(navState) {
  if (navState.hasOwnProperty("index")) {
    return currentRouteName(navState.routes[navState.index]);
  } else {
    return navState.routeName;
  }
}
