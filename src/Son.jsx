function Son({ count, setCount }) {
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm">
        <label className="font-medium text-slate-600">User:</label>

        <input
          type="number"
          value={count}
          onChange={handleChange}
          className="w-20 rounded-md border border-slate-300 px-3 py-2 text-center 
                   focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500
                   transition"
        />
      </div>
    </div>
  );
}

export default Son;
