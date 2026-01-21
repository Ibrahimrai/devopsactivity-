// Utility functions for the frontend

export const apiCall = async (endpoint, options = {}) => {
  const baseURL = 'http://localhost:5000/api';
  const response = await fetch(`${baseURL}${endpoint}`, options);
  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return response.json();
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
