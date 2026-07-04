// src/components/ScaledPage.tsx  (NEW FILE)
import type { ReactNode } from 'react';
import { useScale } from '../hooks/useScale';

interface ScaledPageProps {
  height: number;
  children: ReactNode;
}

export function ScaledPage({ height, children }: ScaledPageProps) {
  const { scale, scaledHeight } = useScale(height);

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      style={{ height: scaledHeight }}
    >
      <div
        className="bg-white font-nunito"
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: '1920px',
          height: `${height}px`,
          marginLeft: '-960px',
          transformOrigin: 'top center',
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}