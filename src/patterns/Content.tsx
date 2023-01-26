import {ChildrenProps} from '@interfaces/interfaceProps';
import { useEffect, useState } from 'react';

export default function Content({children}: ChildrenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {
        isLoading
          ? <div>Loading...</div>
          : <main className="size-box">{children}</main>
      }
    </>
  );
}
