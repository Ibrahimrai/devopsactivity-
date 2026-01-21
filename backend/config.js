// Configuration file for the backend server

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000'
};
