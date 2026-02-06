import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function EditItemForm({ user, onUpdate }) {
  const [form, setForm] = useState(user);

  const submit = (e) => {
    e.preventDefault();
    onUpdate(form);
  };

  return (
    <form onSubmit={submit}>
      <Input
        label="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        label="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        label="Role"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />
      <Button type="submit">Update</Button>
    </form>
  );
}
