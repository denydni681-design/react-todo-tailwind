import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React Fundamentals', isCompleted: false },
    { id: 2, text: 'Styling dengan Tailwind CSS', isCompleted: true },
  ]);
  
  const [currentTodo, setCurrentTodo] = useState(null); // Menyimpan data todo yang sedang diedit

  // Menggunakan useEffect untuk memperbarui document.title saat jumlah todo yang belum selesai berubah
  const uncompletedCount = todos.filter(todo => !todo.isCompleted).length;
  useEffect(() => {
    document.title = `Todo App (${uncompletedCount} sisa)`;
  }, [uncompletedCount]);

  // Fungsi Tambah & Edit Todo
  const handleSaveTodo = (text) => {
    if (currentTodo) {
      // Jika sedang mode edit
      setTodos(todos.map(todo => 
        todo.id === currentTodo.id ? { ...todo, text } : todo
      ));
      setCurrentTodo(null);
    } else {
      // Jika mode tambah baru
      const newTodo = {
        id: Date.now(),
        text,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Fungsi Hapus Todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (currentTodo?.id === id) setCurrentTodo(null); // Batalkan edit jika item dihapus
  };

  // Fungsi Toggle Selesai/Belum
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 antialiased">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
        
        {/* Header Komponen */}
        <Header uncompletedCount={uncompletedCount} />
        
        {/* Form Input Komponen */}
        <TodoForm 
          onSave={handleSaveTodo} 
          currentTodo={currentTodo} 
          onCancelEdit={() => setCurrentTodo(null)} 
        />
        
        {/* Daftar Todo */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 py-4 text-sm">Belum ada tugas hari ini. Santai dulu!</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDeleteTodo}
                onToggle={handleToggleComplete}
                onEdit={setCurrentTodo}
              />
            ))
          )}
        </div>
        
      </div>
    </div>
  );
}