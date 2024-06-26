import { useState } from "react";

const OldUseState = () => {
  const [user, setUser] = useState({ name: "", age: "", hobbies: [] });
  console.log(user);
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="age"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          type="text"
          name="hobby"
          id="hobby"
          placeholder="hobby"
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldUseState;
