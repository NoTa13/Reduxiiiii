import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { editTodo } from '../features/todoSlice';

const TodoDetail = ({ id, onClose }) => {
  // GET BY ID с помощью useSelector
  const todo = useSelector((state) => 
    state.todos.items.find((item) => item.id === id)
  );
  
  const dispatch = useDispatch();
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (todo) setDesc(todo.description);
  }, [todo]);

  if (!todo) return <p>Задача не найдена</p>;

  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, title: todo.title, description: desc }));
    alert('Сохранено!');
  };

  return (
    <div style={{ border: '1px solid blue', padding: '15px', marginTop: '20px' }}>
      <h3>Детали задачи (ID: {id})</h3>
      <p><b>Заголовок:</b> {todo.title}</p>
      <p><b>Статус:</b> {todo.completed ? 'Выполнено' : 'В процессе'}</p>
      
      {/* UPDATE DESCRIPTION */}
      <label>Описание:</label><br/>
      <textarea 
        value={desc} 
        onChange={(e) => setDesc(e.target.value)} 
      /><br/>
      
      <button onClick={handleSave}>Сохранить изменения</button>
      <button onClick={onClose} style={{ marginLeft: '10px' }}>Закрыть</button>
    </div>
  );
};

export default TodoDetail;