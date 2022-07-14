import React from "react";
import { useCallback, useState } from "react";

export default function useSearch(initalValue: string) {
  const [value, setValue] = useState(initalValue);
  const [search, setSearch] = useState([]);

  // const onChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     setValue(e.target.value);
  //     const searchInput = value;
  //     let searchData = wineList.filter((it) => it.name.includes(searchInput));
  //     setSearch(searchData);
  //   },
  //   []
  // );

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return {
    value,
    setValue,
    // onChange,
    onSearch,
  };
}
