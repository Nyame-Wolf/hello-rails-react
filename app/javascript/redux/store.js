import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greeting';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;