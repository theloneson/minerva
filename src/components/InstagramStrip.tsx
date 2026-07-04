interface StripProps {
  top: number;
}

export function InstagramStrip({ top }: StripProps) {
  return (
    <section 
      className="absolute left-0 w-[1920px] h-[367.05px] overflow-hidden flex flex-row" 
      style={{ top: `${top}px` }}
    >
      <img src="/figma/landing/assets/621641ae9e38dc57.jpg" className="w-[384px] h-[367px] object-cover flex-shrink-0" alt="Instagram 1" />
      <img src="/figma/landing/assets/steak.jpeg" className="w-[384px] h-[367px] object-cover flex-shrink-0" alt="Instagram 2" />
      <img src="/figma/landing/assets/grill.jpeg" className="w-[384px] h-[367px] object-cover flex-shrink-0" alt="Instagram 3" />
      <img src="/figma/landing/assets/coffee.jpeg" className="w-[384px] h-[367px] object-cover flex-shrink-0" alt="Instagram 4" />
      <img src="/figma/landing/assets/unicorn.jpeg" className="w-[384px] h-[367px] object-cover flex-shrink-0" alt="Instagram 5" />
    </section>
  );
}

const stripImages = [
  { src: '/figma/landing/assets/621641ae9e38dc57.jpg', alt: 'Instagram 1' },
  { src: '/figma/landing/assets/steak.jpeg', alt: 'Instagram 2' },
  { src: '/figma/landing/assets/grill.jpeg', alt: 'Instagram 3' },
  { src: '/figma/landing/assets/coffee.jpeg', alt: 'Instagram 4' },
  { src: '/figma/landing/assets/unicorn.jpeg', alt: 'Instagram 5' },
];

// Mobile / tablet strip — horizontally scrollable, flow layout (used below lg)
export function MobileInstagramStrip() {
  return (
    <section className="flex flex-row overflow-x-auto no-scrollbar snap-x snap-mandatory">
      {stripImages.map((img) => (
        <img
          key={img.src}
          src={img.src}
          className="w-[60vw] h-[60vw] md:w-[34vw] md:h-[34vw] object-cover flex-shrink-0 snap-start"
          alt={img.alt}
        />
      ))}
    </section>
  );
}