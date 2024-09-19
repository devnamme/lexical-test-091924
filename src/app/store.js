import { configureStore } from '@reduxjs/toolkit';
import pageReducer, { locationEnhancer, locationMiddleware, locationReducer } from './routing';

export default function (preloadedState) {
  const rootReducer = {
    page: pageReducer,
    location: locationReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    enhancers: (e) => [...e(), locationEnhancer],
    middleware: (m) => [...m(), locationMiddleware],
  });

  return { store };
}
