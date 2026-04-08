import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../features/todoSlice';
import TodoDetail from './TodoDetail'; // Импортируем компонент деталей

const TodoList = () => {
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState(null); // Для GET ID (Detail)
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Мой Todo Список</h2>
      
      {/* CREATE */}
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Что нужно сделать?" 
      />
      <button onClick={() => { dispatch(addTodo({ title: text })); setText(''); }}>Добавить</button>

      {/* READ */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span 
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.title}
            </span>
            
            {/* GET ID (DETAIL) BUTTON */}
            <button onClick={() => setSelectedId(todo.id)} style={{ marginLeft: '10px' }}>Детали</button>
            
            {/* DELETE */}
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ marginLeft: '5px', color: 'red' }}>Удалить</button>
          </li>
        ))}
      </ul>

      <hr />
      {/* Показываем детали, если выбран ID */}
      {selectedId && <TodoDetail id={selectedId} onClose={() => setSelectedId(null)} />}
    </div>
  );
};

export default TodoList;