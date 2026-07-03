import { useState, useEffect } from 'react';

export function useScale(originalHeight: number) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Scales down if the window is smaller than 1920px, otherwise stays at 1
      setScale(Math.min(1, window.innerWidth / 1920));
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    scaleTransform: `scale(${scale})`,
    scaledHeight: `${Math.round(originalHeight * scale)}px`,
  };
}