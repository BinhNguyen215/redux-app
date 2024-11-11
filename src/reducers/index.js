import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // thêm các reducers khác ở đây
  },
});

export default store;
