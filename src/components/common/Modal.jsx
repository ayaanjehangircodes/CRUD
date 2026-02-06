export default function Modal({ children, onClose }) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={onClose} style={{ float: "right" }}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.3)",
};

const modal = {
  background: "#fff",
  padding: "20px",
  width: "300px",
  margin: "100px auto",
};
