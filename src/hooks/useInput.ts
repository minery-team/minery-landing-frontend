import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value), 500;
  };

  return [value, onChange, setValue];
}

export default useInput;
