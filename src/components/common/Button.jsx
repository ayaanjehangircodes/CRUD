export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ padding: "6px 12px", margin: "4px" }}
    >
      {children}
    </button>
  );
}
