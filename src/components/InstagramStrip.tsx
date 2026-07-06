interface StripProps {
  top: number;
}

const desktopImages = [
  { src: '/figma/landing/assets/621641ae9e38dc57.jpg', alt: 'Instagram 1' },
  { src: '/figma/landing/assets/steak.jpeg', alt: 'Instagram 2' },
  { src: '/figma/landing/assets/grill.jpeg', alt: 'Instagram 3' },
  { src: '/figma/landing/assets/coffee.jpeg', alt: 'Instagram 4' },
  { src: '/figma/landing/assets/unicorn.jpeg', alt: 'Instagram 5' },
];

function InstagramTile({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div className={`group relative overflow-hidden flex-shrink-0 ${className}`}>
      <img
        src={src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        alt={alt}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <i className="fab fa-instagram text-white text-[36px] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
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
      {desktopImages.map((img) => (
        <InstagramTile key={img.src} src={img.src} alt={img.alt} className="w-[384px] h-[367px]" />
      ))}
    </section>
  );
}

// Mobile / tablet strip — horizontally scrollable, flow layout (used below lg)
export function MobileInstagramStrip() {
  return (
    <section className="flex flex-row overflow-x-auto no-scrollbar snap-x snap-mandatory">
      {desktopImages.map((img) => (
        <InstagramTile
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="w-[60vw] h-[60vw] md:w-[34vw] md:h-[34vw] snap-start"
        />
      ))}
    </section>
  );
}
