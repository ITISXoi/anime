import { configureStore } from '@reduxjs/toolkit';

import createRootReducer from './ducks/rootReducer';

const __prod__ = process.env.NODE_ENV === 'production';

const store = configureStore({
  reducer: createRootReducer(),
  devTools: !__prod__,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
