import { useState, useEffect, useCallback } from 'react';

export function useScale(originalHeight: number) {
  const getScale = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth || document.documentElement.clientWidth || 1920;
    if (!width || width <= 0) return 1;
    return Math.min(1, width / 1920);
  }, []);

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const handleResize = () => {
      const next = getScale();
      setScale((prev) => (next > 0 ? next : prev));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => handleResize());
      ro.observe(document.documentElement);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      ro?.disconnect();
    };
  }, [getScale]);

  return {
    scaleTransform: `scale(${scale})`,
    scaledHeight: `${Math.round(originalHeight * scale)}px`,
  };
}