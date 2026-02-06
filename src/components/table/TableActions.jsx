import Button from "../common/Button";

export default function TableActions({ onEdit, onDelete }) {
  return (
    <>
      <Button onClick={onEdit}>Edit</Button>
      <Button onClick={onDelete}>Delete</Button>
    </>
  );
}
