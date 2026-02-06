import { useState } from "react";
import Table from "../components/table/Table";
import Modal from "../components/common/Modal";
import Loader from "../components/common/Loader";
import Button from "../components/common/Button";
import CreateItemForm from "../components/forms/CreateItemForm";
import EditItemForm from "../components/forms/EditItemForm";
import useFetch from "../hooks/useFetch";
import { fetchUsers } from "../services/api";

export default function Dashboard() {
  const { data: users, setData: setUsers, loading } = useFetch(fetchUsers);
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);

  if (loading) return <Loader />;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management</h2>
      <Button onClick={() => setModal("create")}>Add User</Button>

      <Table
        users={users}
        onEdit={(user) => {
          setSelected(user);
          setModal("edit");
        }}
        onDelete={(id) => setUsers(users.filter((u) => u.id !== id))}
      />

      {modal === "create" && (
        <Modal onClose={() => setModal(null)}>
          <CreateItemForm
            onAdd={(user) => {
              setUsers([...users, user]);
              setModal(null);
            }}
          />
        </Modal>
      )}

      {modal === "edit" && (
        <Modal onClose={() => setModal(null)}>
          <EditItemForm
            user={selected}
            onUpdate={(updated) => {
              setUsers(users.map((u) => (u.id === updated.id ? updated : u)));
              setModal(null);
            }}
          />
        </Modal>
      )}
    </div>
  );
}
