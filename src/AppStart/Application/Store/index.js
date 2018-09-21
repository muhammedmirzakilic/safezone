import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import reducers from "../reducers";
import { initApplication } from "../actions";

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

function configureStore(reducer) {
  const enhancer = composeWithDevTools(
    applyMiddleware(
      navMiddleware,
      thunkMiddleware // to use .dispatch()
      //loggerMiddleware
    )
  );
  return createStore(reducer, undefined, enhancer);
}

const store = configureStore(reducers);
//store.dispatch(initApplication());
export default store;
