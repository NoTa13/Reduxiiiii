import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>Вход</h2>
      <input placeholder="Логин" onChange={(e) => setLogin(e.target.value)} /><br/><br/>
      <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
      <button onClick={() => dispatch(loginUser({ login, password }))}>Войти</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;