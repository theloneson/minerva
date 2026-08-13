import { useRef, useState } from 'react';

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
  { src: '/shared/new_video.mp4', alt: 'The Liquid Spot 5', type: 'video' },
  { src: '/shared/IMG_0023.mov', alt: 'The Liquid Spot 6', type: 'video' },
];

function InstagramTile({ item, className }: { item: StripItem; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const openFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if ((vid as any).webkitRequestFullscreen) {
      (vid as any).webkitRequestFullscreen();
    } else if ((vid as any).mozRequestFullScreen) {
      (vid as any).mozRequestFullScreen();
    }
  };

  return (
    <div
      className={`group relative overflow-hidden flex-shrink-0 ${className}`}
      onMouseEnter={() => {
        setHovered(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          // Reset to muted when mouse leaves
          videoRef.current.muted = true;
          setMuted(true);
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          aria-label={item.alt}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />

      {/* Image hover icon */}
      {item.type === 'image' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <i className="fab fa-instagram text-white text-[36px] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
        </div>
      )}

      {/* Video controls — mute toggle + fullscreen */}
      {item.type === 'video' && (
        <div
          className={`absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between px-3 py-2.5 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {/* Mute / Unmute */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            className="w-8 h-8 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <i className={`fas ${muted ? 'fa-volume-mute' : 'fa-volume-up'} text-white text-[13px]`} />
          </button>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={openFullscreen}
            aria-label="Open video fullscreen"
            className="w-8 h-8 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <i className="fas fa-expand text-white text-[13px]" />
          </button>
        </div>
      )}
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
