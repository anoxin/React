import { useState } from 'react';


export function useTitle() {
  const [title, setTitle] = useState('mrDonalds');
  document.title = title;
  return { title, setTitle };
}