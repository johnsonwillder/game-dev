import { API_BASE_URL,API_HEADERS } from '../../config/api';

export const login = async (username: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify({ username, password }),
    });


   // if (!response.ok) throw new Error('Network error');

    const data = await response.json();
   // console.log(data);
    if (data.code !== '0' || !data.result?.token) {
      throw new Error(data.message || 'Login failed');
    }

    const token = data.result.token;
    localStorage.setItem('token', token);

    return {
      status: 'success',
      token,
    };
  } catch (error) {
    return {
      status: 'error',
      message: (error as Error).message,
    };
  }
};