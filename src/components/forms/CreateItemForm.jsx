import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { generateId } from "../../utils/helpers";

export default function CreateItemForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const submit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: generateId() });
  };

  return (
    <form onSubmit={submit}>
      <Input
        label="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        label="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        label="Role"
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
