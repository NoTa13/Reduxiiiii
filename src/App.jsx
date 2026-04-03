import Login from './components/Login';
import Register from './components/Register';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './features/auth/authSlice';

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (user) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Вы вошли как: {user.name}</h1>
        <button onClick={() => dispatch(logout())}>Выйти</button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '20px' }}>
      <Login />
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '50px' }}>
        <Register />
      </div>
    </div>
  );
}

export default App;