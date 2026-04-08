import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/auth/authSlice';

const Register = () => {
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault(); // Чтобы страница не перезагружалась
    dispatch(registerUser({ login })); // Отправляем данные в Middleware
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <input 
          placeholder="Придумайте логин" 
          onChange={(e) => setLogin(e.target.value)} 
        /><br/><br/>
        <button type="submit">Создать аккаунт</button>
      </form>
    </div>
  );
};

export default Register;