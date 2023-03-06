import {configureStore} from '@reduxjs/toolkit';
// const reduxLogger = require("redux-logger");
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const { default: logger } = require("redux-logger");
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/iceCream/iceCreamSlice';
import userReducer from '../features/user/userSlice';

//Configuring / Defining store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
