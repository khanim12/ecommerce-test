import { configureStore } from '@reduxjs/toolkit';
import flashReducer from './FlashSlider';

const store = configureStore({
  reducer: {
    flash: flashReducer,
  },
});

export default store;
