import { tableColumns } from "../../constants/tableColumns";

export default function TableHeader() {
  return (
    <thead>
      <tr>
        {tableColumns.map((col) => (
          <th key={col}>{col}</th>
        ))}
      </tr>
    </thead>
  );
}
