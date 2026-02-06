import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({ users, onEdit, onDelete }) {
  return (
    <table border="1" width="100%">
      <TableHeader />
      <tbody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
