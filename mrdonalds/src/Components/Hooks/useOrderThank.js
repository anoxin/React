import { useState } from "react";

export const useOrderThank = () => {
  const [openOrderThank, setOpenOrderThank] = useState(false);
  return { openOrderThank, setOpenOrderThank }
}