import { useState } from 'react';
import { login } from '../features/auth/authService';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import BottomNavigation from '../components/BottomNavigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState<'success' | 'error' | 'info'>('success');
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(username, password);
    if (res.status === 'success') {
      setToken(res.token);
     // setModalType('success');
     // setModalMessage('Login successful!');
      setTimeout(() => navigate('/dashboard'), 500);
    } else {
      setModalType('info');
      setModalMessage(res.message || 'Login failed');
    }
  };

  return (
    <div>
      <Navbar />
      <Modal
        isOpen={!!modalMessage}
        message={modalMessage}
        type={modalType}
        onClose={() => setModalMessage('')}
      />
      <div className="p-4 max-w-sm mx-auto">
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-xl font-bold text-center">เข้าสู่ระบบ</h2>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <input
            className="border p-2 w-full"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border p-2 w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 w-full hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
        <BottomNavigation />
    </div>
  );
}
