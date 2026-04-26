import Clock from "./Clock"
import Father from "./Father"
import Parent from "./Parent"
function App() {
return (
  <div className="h-screen flex flex-col bg-slate-100 text-slate-900">
    
    {/* Header */}
    <header className="h-20 shrink-0 border-b border-slate-200 bg-white px-6 shadow-sm">
      <div className="flex h-full items-center justify-between gap-4">
      <h1 className="text-xl font-bold text-slate-800">User Profile</h1>
      <Clock />
      </div>
    </header>

    {/* Body */}
    <div className="flex min-h-0 flex-1 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-80 shrink-0 overflow-y-auto border-r border-slate-200 bg-white p-5">
        <Parent />
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 overflow-y-auto p-6">
        <div className="min-h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <Father />
        </div>
      </main>

    </div>

  </div>
);
}

export default App
