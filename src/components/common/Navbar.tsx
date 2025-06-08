import { useAuth } from '../../features/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { isLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-lg font-semibold">GAMING</div>
      <div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setToken(null);
              navigate('/');
            }}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Register
          </button>
        )}
      </div>
    </nav>
  );
}