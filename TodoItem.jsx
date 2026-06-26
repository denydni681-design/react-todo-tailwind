export default function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <div className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl transition-all group">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Checkbox Penanda Selesai */}
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer"
        />
        {/* Teks Todo dengan Efek Strikethrough jika Selesai */}
        <span 
          className={`text-sm font-medium truncate select-none cursor-pointer flex-1 ${
            todo.isCompleted 
              ? 'line-through text-slate-400 decoration-slate-400 decoration-2' 
              : 'text-slate-700'
          }`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </span>
      </div>

      {/* Tombol Aksi (Edit & Hapus) */}
      <div className="flex items-center gap-1.5 pl-2">
        <button
          onClick={() => onEdit(todo)}
          disabled={todo.isCompleted}
          className="p-1.5 text-slate-400 hover:text-amber-500 disabled:opacity-30 disabled:hover:text-slate-400 rounded-lg hover:bg-white transition-colors"
          title="Edit Tugas"
        >
          {/* Icon Edit Sederhana */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-white transition-colors"
          title="Hapus Tugas"
        >
          {/* Icon Trash Sederhana */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}