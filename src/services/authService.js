import axios from 'axios';

const API_BASE_URL = 'https://api.escuelajs.co/api/v1'; 

// Signup function
export const signupUser  = async (name, email, password, avatar) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, { name, email, password, avatar });
    return response.data; 
  } catch (error) {
    console.error('Signup error:', error);
    throw new Error(error.response?.data?.message || 'Signup failed');
  }
};