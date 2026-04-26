function Child({ index, setIndex, users }) {
  const user = users[index];

  const handleBack = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < users.length - 1 ? prev + 1 : prev));
  };

  if (!user) return <p>Loading...</p>;


return (
  <div className="mt-6 flex gap-3">
    
    <button
      onClick={handleBack}
      disabled={index === 0}
      className="rounded-md bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      ⬅️
    </button>

    <button
      onClick={handleNext}
      disabled={!users || index === users.length - 1}
      className="rounded-md bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      ➡️
    </button>

  </div>
);
}
export default Child;
