import { useState } from "react";

export function useCount(counts) {
  // console.log(counts);
  const [count, setCount] = useState(counts ? counts : 1);

  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange }
}