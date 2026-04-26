import { useEffect, useState } from "react";
import Child from "./child";

function Parent() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const githubProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    githubProfile();
  }, []);

  const user = Array.isArray(users) ? users[index] : null;

  return (
    <div className="flex flex-col items-center">
      {/* Image Card */}
      <div className="flex w-full flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
        {user ? (
          <img
            src={user.avatar_url}
            alt="avatar"
            className="h-56 w-56 rounded-lg object-cover shadow-sm"
          />
        ) : (
          <p className="text-slate-500">Loading...</p>
        )}

        {user && (
          <p className="mt-4 max-w-full truncate text-lg font-semibold text-slate-700">
            {user.login}
          </p>
        )}

        {/* Controls */}
        <Child index={index} setIndex={setIndex} users={users} />
      </div>
    </div>
  );
}

export default Parent;
