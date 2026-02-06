export default function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <input {...props} style={{ width: "100%", padding: "6px" }} />
    </div>
  );
}
