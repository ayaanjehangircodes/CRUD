import TableActions from "./TableActions";

export default function TableRow({ user, onEdit, onDelete }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <TableActions
          onEdit={() => onEdit(user)}
          onDelete={() => onDelete(user.id)}
        />
      </td>
    </tr>
  );
}
