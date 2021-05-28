import {CommonActions} from '@react-navigation/native';
let navigator;

export const setNavigator = (navigation) => {
  navigator = navigation;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
};
