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