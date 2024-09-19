// pageReducer.js
import { connectRoutes, NOT_FOUND } from 'redux-first-router';

const routes = {
  HOME: 'Home',
  [NOT_FOUND]: 'NotFound',
};

export default (state = 'HOME', action = { type: 'HOME' }) => routes[action.type] || state;

const routesMap = {
  HOME: '/',
  LOGIN: '/login',
};

export const {
  reducer: locationReducer,
  middleware: locationMiddleware,
  enhancer: locationEnhancer,
} = connectRoutes(routesMap);
