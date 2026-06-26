import { useState, useEffect } from 'react';

export default function TodoForm({ onSave, currentTodo, onCancelEdit }) {
  const [text, setText] = useState('');

  // Menyesuaikan input jika masuk ke mode edit
  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    } else {
      setText('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSave(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Tambah tugas baru..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-700"
      />
      <button
        type="submit"
        className={`px-4 py-2.5 text-sm font-medium text-white rounded-xl transition-colors shadow-sm ${
          currentTodo 
            ? 'bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-amber-400' 
            : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400'
        }`}
      >
        {currentTodo ? 'Simpan' : 'Tambah'}
      </button>
      {currentTodo && (
        <button
          type="button"
          onClick={onCancelEdit}
          className="px-3 py-2.5 text-sm font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
        >
          Batal
        </button>
      )}
    </form>
  );
}