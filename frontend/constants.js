/* Frontend Constants */

export const API_BASE_URL = 'http://localhost:5000/api';
export const APP_NAME = 'My App';
export const APP_VERSION = '1.0.0';

export const ENDPOINTS = {
  USERS: '/users',
  ITEMS: '/items',
  POSTS: '/posts',
  COMMENTS: '/comments'
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

export const COLORS = {
  PRIMARY: '#667eea',
  SECONDARY: '#764ba2',
  SUCCESS: '#48bb78',
  ERROR: '#f56565',
  WARNING: '#ed8936',
  INFO: '#4299e1'
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};
