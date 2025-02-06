function UserList() {
  const users = [
    {
      id: 1,
      name: "John",
      age: 30,
    },
    {
      id: 2,
      name: "Jane",
      age: 25,
    },
    {
      id: 3,
      name: "Doe",
      age: 35,
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
}

export default UserList;
