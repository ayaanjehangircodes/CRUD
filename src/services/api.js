export const fetchUsers = () =>
  Promise.resolve([
    { id: 1, name: "John Doe", email: "john@test.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@test.com", role: "User" },
  ]);
