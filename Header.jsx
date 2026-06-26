export default function Header({ uncompletedCount }) {
  return (
    <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Task Flow</h1>
        <p className="text-xs text-slate-400 mt-0.5">Manage your daily goals</p>
      </div>
      <div className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
        {uncompletedCount} Tersisa
      </div>
    </div>
  );
}