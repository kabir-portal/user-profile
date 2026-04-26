import { useEffect, useState } from "react";
import Son from "./Son";
function Father() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    const githubProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users?per_page=${count}`,
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    githubProfile();
  }, [count]);

  return (
    <div>
      <div className="mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="mb-6 flex justify-end">
          <Son count={count} setCount={setCount} />
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-sm"
              />

              <p className="mt-3 max-w-full truncate text-sm font-semibold text-slate-700">
                {user.login}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Father;
