import { useEffect, useRef } from 'react';

export default function useEffectOnce(effect) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;

    effect();
    hasRun.current = true;
  }, []);
}
