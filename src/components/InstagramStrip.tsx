import { useRef } from 'react';

interface StripProps {
  top: number;
}

interface StripItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

const stripItems: StripItem[] = [
  { src: '/shared/photo_5951761213043707647_y.jpg', alt: 'The Liquid Spot 1', type: 'image' },
  { src: "/shared/WhatsApp Video 2026-07-11 at 18.01.09.mp4", alt: 'The Liquid Spot 2', type: 'video' },
  { src: "/shared/WhatsApp Video 2026-07-11 at 18.15.44.mp4", alt: 'The Liquid Spot 3', type: 'video' },
  { src: "/shared/WhatsApp Video 2026-07-11 at 18.16.31.mp4", alt: 'The Liquid Spot 4', type: 'video' },
  { src: '/shared/IMG_2719.MOV', alt: 'The Liquid Spot 5', type: 'video' },
  { src: '/shared/IMG_0023.mov', alt: 'The Liquid Spot 6', type: 'video' },
];

function InstagramTile({ item, className }: { item: StripItem; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={`group relative overflow-hidden flex-shrink-0 ${className}`}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {item.type === 'image' ? (
        <img
          src={item.src}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={item.alt}
        />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
          aria-label={item.alt}
        />
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center pointer-events-none">
        {item.type === 'image' && (
          <i className="fab fa-instagram text-white text-[36px] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
        )}
      </div>
    </div>
  );
}

export function InstagramStrip({ top }: StripProps) {
  return (
    <section
      className="absolute left-0 w-[1920px] h-[367.05px] overflow-hidden flex flex-row"
      style={{ top: `${top}px` }}
    >
      {stripItems.map((item) => (
        <InstagramTile key={item.src} item={item} className="w-[320px] h-[367px]" />
      ))}
    </section>
  );
}

// Mobile / tablet strip — horizontally scrollable, flow layout (used below lg)
export function MobileInstagramStrip() {
  return (
    <section className="flex flex-row overflow-x-auto no-scrollbar snap-x snap-mandatory">
      {stripItems.map((item) => (
        <InstagramTile
          key={item.src}
          item={item}
          className="w-[60vw] h-[60vw] md:w-[34vw] md:h-[34vw] snap-start"
        />
      ))}
    </section>
  );
}
