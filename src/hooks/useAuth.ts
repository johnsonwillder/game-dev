import { useAuthStore } from '../store/auth';

export const useAuth = () => {
  const { token, setToken } = useAuthStore();
  const isLoggedIn = !!token;
  return { token, setToken, isLoggedIn };
};