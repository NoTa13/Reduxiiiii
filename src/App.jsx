import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList'; // 1. Импортируем новый компонент
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './features/auth/authSlice';

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Если пользователь вошел в систему
  if (user) {
    return (
      <div style={{ padding: '20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
          <h1>Личный кабинет: {user.name}</h1>
          <button onClick={() => dispatch(logout())} style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
            Выйти
          </button>
        </header>

        {/* 2. Показываем Todo-список после входа */}
        <TodoList />
      </div>
    );
  }

  // Если пользователь НЕ вошел (показываем формы входа и регистрации)
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