import { useEffect, useState } from "react";

export default function useFetch(fetchFn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFn().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, setData, loading };
}
