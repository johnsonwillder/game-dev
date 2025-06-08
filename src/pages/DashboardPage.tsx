import { useEffect, useState } from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Modal from '../components/common/Modal';
import BottomNavigation from '../components/common/BottomNavigation';

export default function DashboardPage() {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/');
    } else {
      setShowWelcome(true);
    }
  }, [token]);

  const handleLogout = () => setShowConfirm(true);
  const confirmLogout = () => {
    setToken(null);
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <Modal
        isOpen={showWelcome}
        message="You are successfully logged in."
        type="success"
        onClose={() => setShowWelcome(false)}
      />
      <Modal
        isOpen={showConfirm}
        message="Are you sure you want to logout?"
        type="confirm"
        onClose={() => setShowConfirm(false)}
        onConfirm={confirmLogout}
      />
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button className="text-red-500" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <p>Welcome! You are logged in.</p>
      </div>
        <BottomNavigation />
    </div>
  );
}