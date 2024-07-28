import React, { useEffect, useState } from 'react';

export function useStorage(
  key: string,
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const storageValue = localStorage.getItem(key);
  const [value, setValue] = useState(storageValue || '');

  useEffect(() => {
    const query = value.trim().toLowerCase();
    localStorage.setItem(key, query);
  }, [key, value]);

  return [value, setValue];
}
